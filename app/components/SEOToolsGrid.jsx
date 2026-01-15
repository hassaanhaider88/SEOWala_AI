import { AiTwotoneStar } from "react-icons/ai";
import React from "react";
import UpperBento from "./UpperBento";
import LowserBento from "./LowserBento";

const SEOToolsGrid = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 text-white w-full">
      <div className="py-2 px-4 shadow-2xl rounded-4xl bg-gray-950 w-fit flex gap-3 items-center font-semibold">
        <AiTwotoneStar size={25} /> <p>SEO Tools</p>
      </div>
      <h1 className="mb-6  text-transparent bg-clip-text bg-linear-to-r from-[#666] via-[#e6e6e6] to-[#333232]  font-medium text-3xl sm:text-8xl text-nowrap tracking-tight mt-4">
        SEO Tools That <br /> Deliver Real Results
      </h1>
      <p className="my-5 text-lg text-gray-400 font-medium">
        Best Analytics app for agencies, consultants, <br /> affiliates,
        e-commerce, saas
      </p>

      <div className="BentoDiv w-full flex flex-col gap-5">
        {/* here two different div will be code for upper and lowser sections */}
        <UpperBento />
        <LowserBento />
      </div>
    </div>
  );
};

export default SEOToolsGrid;
