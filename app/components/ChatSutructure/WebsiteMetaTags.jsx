export default function WebsiteMetaTags({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-5">
      <div>
        <h3 className="text-sm text-gray-500 font-semibold">Meta Title</h3>
        <p className="text-lg font-bold text-gray-900">{data.meta_title}</p>
      </div>

      <div>
        <h3 className="text-sm text-gray-500 font-semibold">
          Meta Description
        </h3>
        <p className="text-gray-700">{data.meta_description}</p>
      </div>

      <div>
        <h3 className="text-sm text-gray-500 font-semibold mb-2">
          Primary Keyword
        </h3>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
          {data.primary_keyword}
        </span>
      </div>

      <div>
        <h3 className="text-sm text-gray-500 font-semibold mb-2">
          Secondary Keywords
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.secondary_keywords.map((k, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {k}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
