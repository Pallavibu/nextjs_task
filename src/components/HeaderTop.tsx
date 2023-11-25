import React from "react";
import { LuTwitter } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";

const HeaderTop = () => {
  const options = [
    "all brands",
    "$hosky",
    "bitfins",
    "cardano stonerz club",
    "cryptoraggies",
    "danketsu",
    "future fest",
    "pendulum",
    "vudu brigada",
  ];
  return (
    <div className="border-b  bg-brown py-8 flex fixed top-14 left-0 right-0 z-50">
      <div className="container">
        <div className="flex gap-10 justify-between">
          <div className="flex gap-5">
            <div>
              <select name="brands" id="brands">
                <option value="brands">brands</option>
                <option value="all">allbrands</option>
                <option value="hosky">$hosky</option>x
                <option value="bitfins">bitfins</option>
                <option value="pendulum">pendulum</option>
                <option value="vudu">vudu</option>
                <option value="fest">fest</option>
              </select>
            </div>
            <div className="gap-1">
              <select name="shop" id="brands">
                <option value="shop">shop</option>
                <option value="all">allbrands</option>
                <option value="hosky">$hosky</option>
                <option value="bitfins">bitfins</option>
                <option value="pendulum">pendulum</option>
                <option value="vudu">vudu</option>
                <option value="fest">fest</option>
              </select>
            </div>
            <div className="text-white">
              <h3>premium</h3>
            </div>
            <div className="text-white">
              <h3>gift cards</h3>
            </div>
          </div>
          <div className="text-yellow drop-shadow-2xl">
            <h1>
              <b>brava</b>
            </h1>
          </div>
          <div className="hidden lg:flex gap-5 px-3 text-white">
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
            <div className="header_top_icon_wrapper relative">
              <RiShoppingCart2Fill />
              <div className="bg-white rounded-full absolute top-0.5 right-0.5 w-3 h-3 flex justify-center items-center text-black">
                o
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
