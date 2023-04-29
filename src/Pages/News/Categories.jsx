import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ category }) => {
  console.log(category);
  return (
    <div className="border-bottom mt-1 p-1">
      <Link
        to={`/category/${category.id}`}
        className="mb-3 text center"
        style={{ textDecoration: "none" }}
      >
        <span className="text-black">{category.name}</span>
      </Link>
    </div>
  );
};

export default Categories;
