import React from "react";
import { Button, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";
const index = () => {
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
      <div className="flex w-full py-9 px-24 items-center justify-between flex-wrap gap">
        {/* logo */}
        <div className="">
          <Link href="/">
            <Image
              src="/logo-black.svg"
              width="170"
              height="50"
              alt="black-logo"
              className="max-h-full"
            />
          </Link>
        </div>
        {/* buttons */}
        <div className="flex gap-4">
          <Button>Home</Button>
          <Button>Shop</Button>
          <Button className="hover:text-white hover:border-black" ghost>
            Login
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default index;
