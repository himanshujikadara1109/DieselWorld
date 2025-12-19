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
        rounded-lg

        mx-auto
        sm:mx-auto
        lg:mx-[-30px]

        mb-[5px]
        sm:mb-8
        lg:mb-0

        w-[240px] h-[240px]
        sm:w-[320px] sm:h-[320px]
        lg:w-[466px] lg:h-[466px]
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