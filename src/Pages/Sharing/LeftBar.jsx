import React, { useEffect, useState } from "react";
import Categories from "../News/Categories";

const LeftBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2>All Category</h2>
      <div className="bg-light ps-3 py-2">
        {categories.map((category) => (
          <Categories key={categories.id} category={category}></Categories>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
