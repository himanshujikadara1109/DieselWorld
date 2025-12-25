import { useRef, useState } from "react";

const ZoomImage = () => {
  const imgRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      ref={imgRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
      className="
        overflow-hidden
        rounded-xl
        mx-auto

        w-full
        max-w-[95%]        /* Mobile */
        sm:max-w-[90%]     /* Tablet */
        md:max-w-[420px]   /* Desktop */
        lg:max-w-[466px]

        aspect-square
      "
    >
      <img
        src="/assets/images/wellcom.jpg"
        alt="Diesel Engine Repair"
        className="w-full h-full object-cover transition-transform duration-300 ease-out"
        style={{
          transform: hovered ? "scale(1.6)" : "scale(1)",
          transformOrigin: `${pos.x}% ${pos.y}%`,
        }}
      />
    </div>
  );
};

export default ZoomImage;
