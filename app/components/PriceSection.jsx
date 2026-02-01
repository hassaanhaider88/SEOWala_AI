"use client";

import Link from "next/link";
import { MdVerified } from "react-icons/md";

import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import pricingData from "../Data/Price";
const PriceSection = () => {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <>
      <div className="px-10" id="price">
        <div className="Content  max-w-full flex justify-start flex-col items-start p-4 md:p-12 ">
          <div className="py-2 px-4 shadow-2xl rounded-4xl bg-gray-950 w-fit flex gap-3 items-center font-semibold">
            <AiTwotoneStar size={25} /> <p>SEO Price</p>
          </div>
          <h1 className="mb-6  text-transparent bg-clip-text bg-linear-to-r from-[#666] via-[#e6e6e6] to-[#333232] capitalize font-medium text-3xl sm:text-8xl text-nowrap tracking-tight mt-4">
            Flexible pricing for <br /> every buisness
          </h1>
          <p className="my-5 text-lg text-gray-400 font-medium">
            Flexible pricing options designed to meet{" "}
            <br className="md:flex hidden" /> your needs whether you&apos;re
            just getting started or scaling up.
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="relative p-1 bg-white border border-gray-200 rounded-full inline-flex items-center mb-16 w-60">
            <div
              className={`absolute -z-10 w-[calc(50%-4px)] h-14 rounded-full bg-linear-to-r from-[#545454] to-[#545454]/70 transition-transform duration-300 ease-in-out pointer-events-none
                        ${isYearly ? "translate-x-full" : "translate-x-0"}`}
            ></div>

            <button
              onClick={() => setIsYearly(false)}
              className={`relative bg-white z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center transition-colors duration-300
                        ${
                          !isYearly
                            ? "text-[#545454] font-semibold"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center flex items-center justify-center gap-1 transition-colors duration-300
                        ${
                          isYearly
                            ? "text-[#545454] font-semibold"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
            >
              Yearly
              <span className="text-xs">15% off</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="w-full flex-col flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full items-end">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className={
                  plan.mostPopular
                    ? "bg-linear-to-r from-[#686868] to-[#FFDBC4] rounded-3xl p-2 shadow-xl hover:shadow-lg transition-shadow"
                    : ""
                }
              >
                {plan.mostPopular && (
                  <p className="text-center text-[#686868] text-lg py-1.5">
                    Popular
                  </p>
                )}
                <div
                  key={index}
                  className={`rounded-3xl text-white p-6  ${
                    !plan.mostPopular
                      ? "border bg-linear-to-tl from-[#686868] via-[#302f2f9c] to-[#00000081] border-neutral-200 hover:shadow-lg transition-shadow"
                      : "bg-white"
                  }`}
                >
                  <h3 className="font-semibold text-sm mb-6">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span
                      className={`text-4xl ${
                        !plan.mostPopular ? "text-white" : "text-[#686868]"
                      }`}
                    >
                      {isYearly
                        ? `$${plan.pricing - Math.round(plan.pricing * 10.2)}`
                        : `$${plan.pricing}`}
                    </span>
                    <span className="text-neutral-600 text-xs">
                      / {isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <ul
                    className={`space-y-4 mb-8 ${
                      !plan.mostPopular ? "text-white" : "text-[#686868]"
                    }`}
                  >
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <MdVerified
                          size={22}
                          color={
                            !plan.mostPopular ? "text-white" : "text-[#686868]"
                          }
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/upgrade">
                    <button className="w-full  cursor-pointer py-3 rounded-full bg-linear-to-r from-[#686868] to-[#686868a4] duration-200 text-white text-sm hover:opacity-95 transition-opacity">
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
