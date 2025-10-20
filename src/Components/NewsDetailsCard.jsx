import { FaArrowLeft, FaEye, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const navigate = useNavigate();

  const {
    title,
    details,
    author,
    rating,
    total_view,
    thumbnail_url,
    tags,
  } = news;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all p-4">

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug">
          {title}
        </h2>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-5">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* News Details */}
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(Math.round(rating?.number || 0))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-sm font-medium text-gray-800 ml-2">
              {rating?.number} / 5
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span className="text-sm">{total_view?.toLocaleString()} views</span>
          </div>
        </div>
      </div>
      {/* Top Bar with Back Button */}
      <div className="flex items-center w-fit gap-3 p-3 border-b bg-secondary">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
        >
          <FaArrowLeft className="text-lg" />
          <span className="text-sm font-medium">All news in this category</span>
        </button>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
