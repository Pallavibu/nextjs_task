import React from "react";
import { LuTwitter } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";

const HeaderTop = () => {
  return (
    <div className="border-b sm:block">
      <div className="container py-6">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div>
              <h3>brands</h3>
            </div>
            <div>
              <h3>shop</h3>
            </div>
            <div>
              <h3>premium</h3>
            </div>
            <div>
              <h3>gift cards</h3>
            </div>
          </div>
          <div className="text-yellow drop-shadow-2xl">
            <h1>
              <b>brava</b>
            </h1>
          </div>
          <div className="hidden lg:flex gap-4">
            <div>
              <p>become an affiliate</p>
            </div>
            <div className="header_top_icon_wrapper ">
              <LuTwitter />
            </div>
            <div className="header_top_icon_wrapper">
              <FaTiktok />
            </div>
            <div className="header_top_icon_wrapper ">
              <FaInstagram />
            </div>
            <div className="header_top_icon_wrapper ">
              <IoPersonOutline />
            </div>
            <div className="header_top_icon_wrapper">
              <FaSearch />
            </div>
            <div className="header_top_icon_wrapper ">
              <RiShoppingCart2Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
