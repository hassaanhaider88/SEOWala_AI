"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Supportpage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="Img w-full md:w-1/2">
        <img src="" alt="" />
      </div>
      <div className="Form w-full  md:w-1/2">
        <form className="grid bg-red-700  mx-auto mr-5 text-slate-500 w-full">
          <h1 className="text-4xl font-semibold text-gray-500">
            Need Support?
          </h1>
          <p className="text-md font-semibold text-gray-700">
            Contact Us if you need futher assistance!
          </p>

          <div>
            <p className="mb-2 mt-5 font-medium">Your name</p>
            <div className="flex rounded-4xl  items-center px-5 my-2  overflow-hidden border border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user size-5"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent outline-none"
                type="text"
                name="name"
              />
            </div>
          </div>
          <div>
            <p className="mb-2 font-medium">Email id</p>
            <div className="flex rounded-4xl  items-center px-5 my-2  overflow-hidden border border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail size-5"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <input
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent outline-none"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 font-medium">Message</p>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="focus:border-pink-500 resize-none w-full p-3 bg-transparent outline-none rounded-2xl overflow-hidden border border-slate-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-max flex items-center gap-2  text-white px-10 py-3 rounded-full"
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right size-5"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Supportpage;
