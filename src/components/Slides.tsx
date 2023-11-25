import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  buttontext: string;
}

const Slides: React.FC<propsType> = ({ img, title, buttontext }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%]  bg-[#ffffffa2] sm:bg-transparent p-0 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-white text-6xl font-extrabold">{title}</h3>
        <div className="absolute top-16">
          <button className="w-32 bg-white text-black p-4 rounded-lg hover:bg-black hover:text-white">{buttontext}</button>
        </div>
      </div>

      <Image
        className="w-[100%] h-[100%] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
        layout="responsive"
      />
    </div>
  );
};

export default Slides;
