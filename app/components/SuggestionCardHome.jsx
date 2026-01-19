import React from "react";
import { HiSparkles } from "react-icons/hi";

const SuggestionCardHome = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-light mb-3">
          Welcome to{" "}
          <span className="font-semibold bg-linear-to-r from-gray-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            SEOWala
          </span>
        </h1>
        <p className="text-zinc-400 text-lg">
          Your Personalized SEO Assistant.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-4xl w-full mb-16">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
            <HiSparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-medium mb-1.5">Where to next?</h3>
          <p className="text-xs text-zinc-500">
            Show me the cheapest flights to London next week.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
            <HiSparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-medium mb-1.5">Flight updates</h3>
          <p className="text-xs text-zinc-500">
            Whats the check-in baggage policy for Delta?
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
            <HiSparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-medium mb-1.5">Ask about your trip</h3>
          <p className="text-xs text-zinc-500">
            Can I cancel my flight to Tokyo?
          </p>
        </div>
      </div>
    </>
  );
};

export default SuggestionCardHome;
