/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function InfluencerMarketing() {
  const stats = [
    { value: "10k+", label: "Deal with Clients" },
    { value: "1.5k+", label: "Team Members" },
    { value: "24.1k+", label: "Completed Project" },
  ];

  const services = [
    {
      title: "Ad Campaign Strategies",
      description:
        "Our ad campaign strategies are designed to maximize your brand's reach and impact, ensuring effective engagement and measurable results.",
      bgColor: "bg-blue-950/30",
    },
    {
      title: "Content Strategy",
      description:
        "Our content strategy focuses on creating engaging, relevant material that drives audience interaction and supports your business goals.",
      bgColor: "bg-gray-800/50",
    },
    {
      title: "Business Scaling",
      description:
        "Our expert strategies in business scaling help you expand your operations efficiently, ensuring sustainable growth and increased market presence. Partner with us to elevate your business to new heights.",
      bgColor: "bg-gray-800/50",
      fullWidth: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-gray-400 text-sm mb-4 tracking-wide">
            About Our Company
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <h1 className="text-4xl lg:text-5xl font-bold max-w-xl leading-tight">
              Innovative Influencer Marketing to Boost Your Business
            </h1>

            {/* Stats */}
            <div className="flex gap-8 bg-green-500 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Image */}
          <div className="lg:row-span-2 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1000&fit=crop"
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ad Campaign Strategies */}
          <div
            className={`${services[0].bgColor} rounded-3xl p-8 border border-gray-800 hover:-translate-y-1 transition-transform`}
          >
            <h2 className="text-2xl font-bold mb-4">{services[0].title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {services[0].description}
            </p>
            <button className="flex items-center gap-2 text-white hover:gap-3 transition-all group">
              <span>Read More</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Content Strategy */}
          <div
            className={`${services[1].bgColor} rounded-3xl p-8 border border-gray-800 hover:-translate-y-1 transition-transform`}
          >
            <h2 className="text-2xl font-bold mb-4">{services[1].title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {services[1].description}
            </p>
            <button className="flex items-center gap-2 text-white hover:gap-3 transition-all group">
              <span>Read More</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Business Scaling */}
          <div
            className={`${services[2].bgColor} rounded-3xl p-8 border border-gray-800 lg:col-span-2 hover:-translate-y-1 transition-transform`}
          >
            <h2 className="text-2xl font-bold mb-4">{services[2].title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-3xl">
              {services[2].description}
            </p>
            <button className="flex items-center gap-2 text-white hover:gap-3 transition-all group">
              <span>Read More</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
