import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({
  news: {
    id,
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
  },
}) => {
  const { name, img, published_date } = author;
  const { number, badge } = rating;

  // See more toggle state
  const [seeMore, setSeeMore] = useState(false);

  // rating star
  const stars = Array.from({ length: Math.round(number) }, (_, i) => i);

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Author Info */}
      <div className="flex justify-between pr-4 bg-gray-100">
        <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <img
          src={img}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
          <div>
            <h2 className="font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(published_date).toDateString()}
            </p>
          </div>
      </div>
      <button className="flex gap-1 items-center">
            <CiBookmark />
            <IoShareSocialOutline />
          </button>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold text-gray-800">
          {title}
          {badge && (
            <div className="badge badge-secondary capitalize">{badge}</div>
          )}
        </h2>

        {/* Details + See More (inline) */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {seeMore ? details : details.slice(0, 180) + "... "}
          <Link to={`/news-details/${id}`}
            onClick={() => setSeeMore(!seeMore)}
            className="text-blue-600 font-medium hover:underline"
          >
            {seeMore ? "See Less" : "See More"}
          </Link>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 border-t pt-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            {/* ⭐ dynamic stars */}
            <div className="flex text-yellow-500">
              {stars.map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="font-medium">{number}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaEye className="text-gray-700" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
