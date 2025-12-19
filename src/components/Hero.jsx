import { useEffect, useState } from "react";

const Hero = () => {
  const title = "Powering Diesel Performance";
  const subtitle = "Global leaders in diesel engine solutions";

  const [text, setText] = useState("");
  const [showSub, setShowSub] = useState(false);
    let i = 0;

  useEffect(() => {
    let string = '';
    const timer = setInterval(() => {
      if(title[i]) {
        string += title[i];
        setText(string);
        i++;
      }
      if (i === title.length) {
        clearInterval(timer);
        setShowSub(true);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[520px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      <video
        src="/src/assets/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative h-full flex flex-col items-center mt-30 justify-center px-4 text-center">
        <h1 className="
          text-white
          font-bold
          text-[22px]
          sm:text-[32px]
          md:text-[40px]
          lg:text-[48px]
          leading-tight
          max-w-[1000px]
        ">
          {text.split(" ").map((word, i) =>
            word === "Diesel" ? (
              <span key={i} className="text-red-600">
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
          <span className="animate-pulse">|</span>
        </h1>

        {showSub && (
          <p className="
            mt-4
            text-gray-300
            text-[14px]
            sm:text-[16px]
            md:text-[18px]
            max-w-[600px]
          ">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
