import React from "react";
import Counter from "./Counter";
import hero2 from "../../public/assets/images/image-4.svg";
import { Button, ConfigProvider } from "antd";
import Image from "next/image";

const Deals = () => {
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
      <div className="mt-24 mx-auto container xl:px-24 md:px-8 px-4 relative flex lg:flex-row flex-col gap-8 items-center">
        {/* text-info */}
        <div className="lg:max-w-[50%] lg:text-left text-center">
          <h2 className="text-[#111] text-3xl">Deals of the Month</h2>
          <p className="text-[#111] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            consequatur perferendis fugiat eos magnam earum quisquam hic
            corrupti culpa. Sunt inventore veritatis sapiente obcaecati nobis
            ipsam ut dicta in expedita.
          </p>
          <Counter />
          <Button
            size="large"
            className="hover:!text-white hover:!border-dark"
            ghost
          >
            View Products -&gt;
          </Button>
        </div>
        {/* image */}
        <div className="min-w-[50%] h-auto">
          <Image
            src={hero2.src}
            className="w-full h-auto"
            alt="asset"
            width={25}
            height={25}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Deals;
