import React from "react";
import Link from "next/link";
import styles from "./MovingBox.module.css";

const MovingBox = () => {
  return (
    <div className={styles.box}>
      <div className="flex">
        <div className="flex bg-gray-800 w-52 h-24 m-10 gap-2 ">
          <div className="flex justify-center w-20">
            <img src="/logo1.png" alt="Description of the photo" />
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">Pallavi</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-800 w-52 h-24 m-10 gap-2 ">
          <div className="flex justify-center w-20">
            <img src="/logo2.png" alt="Description of the photo" />
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">Pallavi</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-800 w-52 h-24 m-10 gap-2 ">
          <div className="flex justify-center w-20">
            <img src="/logo3.png" alt="Description of the photo" />
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">Pallavi</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-800 w-52 h-24 m-10 gap-2 ">
          <div className="flex justify-center w-20">
            <img src="/logo4.png" alt="Description of the photo" />
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">Pallavi</h2>
            <Link href="./shop" legacyBehavior>
              <a className="text-white">Shop Now</a>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-800 w-52 h-24 m-10 gap-2 ">
          <div className="flex justify-center w-20">
            <img src="/logo5.png" alt="Description of the photo" />
          </div>
          <div className="flex-col m-2 justify-center items-center">
            <h2 className="text-white">Pallavi</h2>
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
