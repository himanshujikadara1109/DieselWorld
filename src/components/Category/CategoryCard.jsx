import { useRef } from "react";

const CategoryCard = ({ title, image, large }) => {
  const imgRef = useRef(null);

  /* == CURSOR BASED MOVE = */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = ((x / rect.width) - 0.5) * 30;
    const moveY = ((y / rect.height) - 0.5) * 30;

    imgRef.current.style.transform = `
      translate(-50%, -50%)
      translate(${moveX}px, ${moveY}px)
      scale(1.05)
    `;
  };

  const resetImage = () => {
    imgRef.current.style.transform =
      "translate(-50%, -50%) scale(1)";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetImage}
      className={`
        relative overflow-hidden bg-[#2b2b2b]

        /* MOBILE */
        ${large ? "w-[270px] h-[380px]" : "w-[270px] h-[270px]"}

        /* DESKTOP */
        ${large
          ? "lg:w-[507px] lg:h-[564px]"
          : "lg:w-[270px] lg:h-[270px]"
        }
      `}
    >
      {/* ===== PNG IMAGE === */}
      <img
        ref={imgRef}
        src={image}
        alt={title}
        className={`
          absolute
          top-1/2 left-[80%]
          transition-transform duration-300 ease-out
          will-change-transform

          /* MOBILE SIZE */
          ${large
            ? "w-[360px] h-[360px]"
            : "w-[320px] h-[320px]"
          }

          /* DESKTOP SIZE */
          ${large
            ? "lg:w-[590px] lg:h-[590px]"
            : "lg:w-[320px] lg:h-[320px]"
          }
        `}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* TEXT */}
      <div
        className="
          absolute bottom-4 left-4
          bg-black/40
          px-3 py-1
          rounded
          text-white
          font-semibold
          text-[16px]
          lg:text-[18px]
        "
      >
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
