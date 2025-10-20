import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);
  // console.log(categories);

  return (
    <div>
      <h3 className="font-bold">All Categories({categories.length})</h3>
      <div className="grid grid-cols-1 gap-3 mt-4">
        {categories.map((category) => (
          <NavLink className="btn bg-base-100 border-0 hover:bg-base-200 text-accent" to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
