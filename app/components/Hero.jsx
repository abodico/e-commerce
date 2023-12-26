import Image from "next/image";
import React from "react";
import hero1 from "/public/adminUi/hero/hero-1.png";
import { Typography } from "antd";
const { Title } = Typography;
const Hero = () => {
  return (
    <div>
      <div className=" relative">
        <Image className="h-auto w-full" src={hero1} alt="hero-image" />
      </div>
      <div className="">
        {/* <Title level={2}>Unleash Innovation in Every Byte.</Title> */}
      </div>
    </div>
  );
};

export default Hero;
