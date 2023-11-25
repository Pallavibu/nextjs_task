"use client"

import React from "react";
import { IoSettings } from "react-icons/io5";
import Slider from "react-slick";
import Slides from "./Slides";

const Hero = () => {
  var settings = {
    dots: true,
    infinte: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/image1.png",
      title: "",
      mainTitle: "",
    },
    {
      id: 1,
      img: "/image2.png",
      title: "",
      mainTitle: "",
    },
    {
      id: 2,
      img: "/image3.png",
      title: "",
      mainTitle: "",
    },
    {
      id: 3,
      img: "/image4.png",
      title: "",
      mainTitle: "",
    },
    {
      id: 4,
      img: "/image5.png",
      title: "",
      mainTitle: "",
    },
  ];
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slides
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
            />
          ))} 
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
