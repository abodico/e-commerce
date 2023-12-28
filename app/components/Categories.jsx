import React from "react";
import watches from "../../public/adminUi/categories/watches-category.png";
import accessories from "../../public/adminUi/categories/accessories-category.png";
import ipads from "../../public/adminUi/categories/ipads-category.png";
import laptops from "../../public/adminUi/categories/laptops-category.png";
import phones from "../../public/adminUi/categories/phones-category.png";
import tv from "../../public/adminUi/categories/tv-home-category.png";
import Link from "next/link";
const Categories = () => {
  const data = [
    {
      image: watches,
      title: "Watches",
    },
    {
      image: tv,
      title: "TV & Home",
    },
    {
      image: ipads,
      title: "Ipads",
    },
    {
      image: accessories,
      title: "Accessories",
    },
    {
      image: laptops,
      title: "Laptops",
    },
    {
      image: phones,
      title: "Phones",
    },
  ];
  return (
    <div className="mt-24">
      <div className="flex justify-between items-center lg:px-24 md:px-8 px-4 ">
        <h3 className="text-dark text-3xl font-semibold ">
          Shop by Categories
        </h3>
        <Link href="/products" className="text-dark">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Categories;
