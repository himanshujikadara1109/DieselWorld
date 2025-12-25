import { useRef } from "react";

const CategoryCard = ({ title, image, large }) => {
  const imgRef = useRef(null);

  /* == CURSOR BASED 3D MOVE + BRIGHTNESS == */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 30;
    const moveY = (y / rect.height - 0.5) * 30;

    imgRef.current.style.transform = `
      translate(-50%, -50%)
      translate(${moveX}px, ${moveY}px)
      scale(1.08)
    `;

    imgRef.current.style.filter =
      "brightness(1.25) drop-shadow(0 30px 40px rgba(255,255,255,0.35))";
  };

  const resetImage = () => {
    imgRef.current.style.transform =
      "translate(-50%, -50%) scale(1)";
    imgRef.current.style.filter =
      "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetImage}
      className={`
        relative overflow-hidden rounded-2xl bg-[#2b2b2b]
        transition-all duration-300

        /* MOBILE */
        ${large ? "w-[270px] h-[380px]" : "w-[270px] h-[270px]"}

        /* DESKTOP */
        ${
          large
            ? "lg:w-[507px] lg:h-[564px]"
            : "lg:w-[270px] lg:h-[270px]"
        }
      `}
    >
      {/* 🔥 CENTERED 3D IMAGE */}
      <img
        ref={imgRef}
        src={image}
        alt={title}
        className={`
          absolute top-1/2 left-1/2
          transition-all duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          will-change-transform
          pointer-events-none

          /* MOBILE SIZE */
          ${large ? "w-[360px] h-[360px]" : "w-[300px] h-[300px]"}

          /* DESKTOP SIZE */
          ${
            large
              ? "lg:w-[590px] lg:h-[590px]"
              : "lg:w-[320px] lg:h-[320px]"
          }
        `}
        style={{
          transform: "translate(-50%, -50%)",
          filter: "brightness(1)",
        }}
      />

      {/* DARK OVERLAY (REDUCES ON HOVER NATURALLY) */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* TITLE */}
      <div
        className="
          absolute bottom-4 left-4
          bg-black/50
          px-3 py-1
          rounded
          text-white
          font-semibold
          text-[16px]
          lg:text-[18px]
          backdrop-blur-sm
        "
      >
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
