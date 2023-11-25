import React from "react";
import { useState } from "react";
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
    <div className="border-b  bg-brown py-8 sm:hidden md:block ">
      <div className="container">
        <div className="flex gap-10 justify-between">
          <div className="flex gap-5">
            <div>
              <select name="brands" id="brands">
                <option value="brands">brands</option>
                <option value="all">allbrands</option>
                <option value="hosky">$hosky</option>
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
          <div className="hidden lg:flex gap-5 px-3">
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
