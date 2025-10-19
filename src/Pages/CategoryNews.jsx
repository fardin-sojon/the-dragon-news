import { da } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [categoryNews, setCategoryNews] = useState([]);

  // console.log(id, data);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id === Number(id));
      console.log(filterNews);
      setCategoryNews(filterNews);
    }
  }, [data, id]);

  if (categoryNews.length === 0) {
    return <h2 className="text-center font-bold bg-gray-100 rounded-md py-20">No News yets</h2>;
  }

  return (
    <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryNews.length}</span> News
        Found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
