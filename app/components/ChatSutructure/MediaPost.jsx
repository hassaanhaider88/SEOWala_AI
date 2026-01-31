import React from "react";

const MediaPost = ({ data }) => {
  if (!data) return null;

  const { caption, call_to_action, hashtags = [], tone } = data;

  return (
    <div className="w-full flex justify-center ">
      <div className="bg-[#18181B] text-white rounded-2xl p-6 max-w-2xl shadow-lg">
        {/* Tone */}
        {tone && (
          <p className="text-xs text-gray-400 mb-2 uppercase font-semibold">
            {tone}
          </p>
        )}

        {/* Caption */}
        {caption && <p className="text-sm text-gray-200 mb-4">{caption}</p>}

        {/* Call to Action */}
        {call_to_action && (
          <p className="text-sm text-white font-bold mb-4 bg-gray-800 px-3 py-2 rounded-lg inline-block">
            {call_to_action}
          </p>
        )}

        {/* Hashtags */}
        {hashtags.length > 0 && (
          <p className="text-xs text-gray-400">{hashtags.join(" ")}</p>
        )}
      </div>
    </div>
  );
};

export default MediaPost;
