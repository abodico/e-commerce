"use client";
import React from "react";
import { Button, ConfigProvider, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "Home",
    key: "1",
  },
  {
    label: "Shop",
    key: "2",
  },
  {
    label: "Login",
    key: "3",
  },
  {
    label: "Create Account",
    key: "4",
  },
];
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
      <div className="flex w-full md:py-9 py-6 lg:px-24 md:px-8 px-4 items-center justify-between flex-wrap gap">
        {/* logo */}
        <div className="">
          <Link href="/">
            <Image
              src="/logo-black.svg"
              width="170"
              height="50"
              alt="black-logo"
              className="max-h-full max-w-32 sm:max-w-44"
            />
          </Link>
        </div>
        {/* buttons */}
        {/* in md screens it'll be buttons otherwise it's dropdown */}
        <div className="md:flex gap-4 hidden">
          <Button size="large">Home</Button>
          <Button size="large">Shop</Button>
          <Button
            size="large"
            className="hover:!text-white hover:!border-dark"
            ghost
          >
            Login
          </Button>
        </div>
        {/* dropdown */}
        <div className="md:hidden block">
          <Dropdown
            menu={{
              items,
              onClick,
              // style: { width: "160px" },
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <MenuOutlined className="text-xl" />
            </a>
          </Dropdown>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default index;
