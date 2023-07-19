import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`}/category`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <h1 className="title"> Category </h1>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
      <Link to="/note">
        <h2 className="theme"> Notes </h2>
      </Link>

      <Link to="/mood">
        <h2 className="theme"> Mood </h2>
      </Link>

      <Link to="/picture">
        <h2 className="theme"> Picture </h2>
      </Link>
    </div>
  );
}

export default CategoryList;
