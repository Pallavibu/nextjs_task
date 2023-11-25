import React from "react";
import Link from "next/link";
import styles from "./MovingBox.module.css";

const MovingBox = () => {
  return (
    <div className={styles.box}>
      <div className="flex">
        <div className="flex bg-gray-800 m-10 gap-1 border-l w-64 h-36 p-4 rounded-tl-3xl rounded-bl-3xl">
          <div className="flex justify-center items-center w-20">
            <img src="/logo1.png" alt="Description of the photo" className="20"/>
          </div>
          <div className="flex-col m-2 justify-center items-center ">
            <h2 className="text-white">bitfins</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link> 
          </div>
        </div>
        <div className="flex bg-gray-800 m-10 gap-1 border-l w-64 h-36 p-4 rounded-tl-3xl rounded-bl-3xl ">
          <div className="flex justify-center items-center w-20">
            <img src="/logo2.png" alt="Description of the photo" className="h-20"/>
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">$hosky</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-800 m-10 gap-1 border-l w-64 h-36 p-4 rounded-tl-3xl rounded-bl-3xl ">
          <div className="flex justify-center items-center w-20">
            <img src="/logo3.png" alt="Description of the photo" className="h-20" />
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">vudu brigada</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-800 m-10 gap-1 border-l w-64 h-36 p-4 rounded-tl-3xl rounded-bl-3xl ">
          <div className="flex justify-center items-center w-20">
            <img src="/logo4.png" alt="Description of the photo" className="h-20" />
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">future fest</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-800 m-10 gap-1 border-l w-64  h-36 p-4 rounded-tl-3xl rounded-bl-3xl">
          <div className="flex justify-center items-center w-20">
            <img src="/logo5.png" alt="Description of the photo" className="h-20"/>
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">pendulum</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-800 m-10 gap-1 border-l w-64 h-36 p-4 rounded-tl-3xl rounded-bl-3xl">
          <div className="flex justify-center items-center w-20">
            <img src="/logo6.png" alt="Description of the photo" className="h-20" />
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">danketsu</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingBox;
