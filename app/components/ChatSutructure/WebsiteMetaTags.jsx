import React from "react";

const WebsiteMetaTags = ({ data }) => {
  if (!data) return null;

  const {
    meta_title,
    meta_description,
    primary_keyword,
    secondary_keywords = [],
  } = data;

  return (
    <div className="w-full flex justify-center ">
      <div className="bg-[#18181B] text-white rounded-2xl p-6 max-w-2xl shadow-lg">
        {/* Meta Title */}
        {meta_title && (
          <h2 className="text-lg font-bold mb-3 border-b border-gray-700 pb-2">
            {meta_title}
          </h2>
        )}

        {/* Meta Description */}
        {meta_description && (
          <p className="text-sm text-gray-300 mb-4">{meta_description}</p>
        )}

        {/* Primary Keyword */}
        {primary_keyword && (
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-400 mb-1">
              Primary Keyword:
            </p>
            <p className="text-sm text-gray-200">{primary_keyword}</p>
          </div>
        )}

        {/* Secondary Keywords */}
        {secondary_keywords.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-400 mb-1">
              Secondary Keywords:
            </p>
            <p className="text-sm text-gray-200">
              {secondary_keywords.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebsiteMetaTags;
