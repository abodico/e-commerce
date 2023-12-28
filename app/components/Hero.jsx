import Image from "next/image";
import React from "react";
import hero1 from "/public/adminUi/hero/hero-1.png";
import { Button, ConfigProvider } from "antd";
const Hero = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            ghostBg: "#000",
            defaultGhostBorderColor: "#000",
          },
        },
      }}
    >
      <div className="max-h-[900px] min-h-60 relative flex items-center w-full blue-back overflow-hidden">
        <Image
          className="h-auto max-w-full relative md:left-20 left-16"
          src={hero1}
          alt="hero-image"
        />
        <div className="absolute max-w-[6,0%]  top-1/2 lg:left-20 text-dark xl:left-40 left-8 -translate-y-1/2 sm:block ">
          <h1 className="lg:text-6xl  md:text-5xl sm:text-3xl text-2xl !leading-snug font-bold ">
            Unleash Innovation
            <br /> in Every Byte.
          </h1>
          <h2 className="md:text-xl sm:text-lg text-slate-800">
            Explore a World of Cutting-Edge Tech
          </h2>
          <Button
            ghost
            size="large"
            className=" hover:!text-white hover:!border-dark md:mt-4 mt-12"
          >
            Shop now
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Hero;
