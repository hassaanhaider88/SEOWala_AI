/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="text w-1/2 p-6 md:p-12">
        <div class="flex items-center space-x-2.5 border border-blue-500/30 rounded-full bg-blue-500/20 p-1 text-sm text-blue-600">
          <div class="flex items-center space-x-1 bg-blue-500 text-white border border-blue-500 rounded-3xl px-3 pl-1 py-1">
            <img
              class="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage"
            />
            <p>Richard</p>
          </div>
          <p class="pr-3">Your subscription renews on 22 March</p>
        </div>
        <h1 className="mb-6 text-white font-medium text-7xl mt-4">
          Boost Your <br /> website&#39;s SEO 
        </h1>
        <p className="my-3 text-md font-medium">
                Best Analytics app for agencies, consultants, affiliates, e-commerce 
        </p>
      </div>
      <div className="Img md:w-1/2 p-6 md:p-12 flex justify-center">
        <img
          src="/hero-image.png"
          alt="Hero"
          className="w-full h-auto mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
