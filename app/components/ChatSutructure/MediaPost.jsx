export default function MediaPost({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-5">
      <div>
        <h3 className="text-sm text-gray-500 font-semibold mb-1">Caption</h3>
        <p className="text-gray-900 whitespace-pre-line">{data.caption}</p>
      </div>

      {data.call_to_action && (
        <div className="bg-green-50 p-4 rounded-xl">
          <h3 className="text-sm font-semibold text-green-700 mb-1">CTA</h3>
          <p className="text-green-900 font-medium">{data.call_to_action}</p>
        </div>
      )}

      <div>
        <h3 className="text-sm text-gray-500 font-semibold mb-2">Hashtags</h3>
        <div className="flex flex-wrap gap-2">
          {data.hashtags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-400">Tone: {data.tone}</div>
    </div>
  );
}
