/* eslint-disable jsx-a11y/alt-text */
import { BsEyeFill } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const LowserBento = () => {
  const WebSiteInfoWithViews = [
    {
      name: "HMK CodeWeb",
      views: "1.4K Views",
      url: "www.hmkcode.com",
    },
    {
      name: "Hassaan Haider",
      views: "2.3K Views",
      url: "www.hassaanhaider.com",
    },
    {
      name: "SEOWala",
      views: "3.4K Views",
      url: "www.seowala.com",
    },
  ];
  return (
    <div className="w-full md:flex-row flex-col flex gap-5 py-2  font-semibold">
      <div
        style={{
          background:
            "repeating-linear-gradient(90deg, #fff, #fff 5px, #000 5px, #000 50px)",
        }}
        className="py-5 rounded-2xl w-full flex flex-col items-center justify-center  md:w-[30%]"
      >
        <div className="py-3 px-6 relative bg-black text-white rounded-4xl outline-2 outline-gray-500">
          Connet With
          <span className="absolute -bottom-3">
            <HiCursorClick size={50} color="#fff" />
          </span>
        </div>
        <Image
          src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png"
          alt="Google Logo"
          className="py-2 filter brightness-0 invert"
          width={300}
          height={100}
        />
        <p className="text-xl text-gray-200">Search Console</p>
      </div>
      <div className="GraphDiv h-75  rounded-2xl relative py-3 bg-linear-to-t to-[#4E504E] via-black from-gray-500 w-full md:w-[70%]">
        {WebSiteInfoWithViews.map((site, indx) => {
          return (
            <div
              key={indx}
              style={{
                bottom: `${indx * 80}px`,
                right: `${indx * 60}px`,
                rotate: `-${(indx + 1) * 5}deg`,
              }}
              className="w-75 py-3 bottom-2 mb-5 absolute flex justify-between items-center px-4 text-black bg-white rounded-xl"
            >
              <div>
                <p className="text-gray-700">{site.url}</p>
                <p className="text-xl text-gray-900">{site.name}</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <BsEyeFill />
                <p className="text-right">{site.views}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowserBento;
