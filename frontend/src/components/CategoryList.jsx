import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import chat from "../assets/chat.png";

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
    <div className="body-category">
      <Link to="/">
        <h1 className="title"> Menu </h1>
      </Link>
      {categories.map((category) => (
        <li key={category.id}> . </li>
      ))}
      <div className="theme-container">
        <Link to="/note">
          <h2 className="theme"> Notes </h2>
        </Link>

        <Link to="/mood">
          <h2 className="theme"> Lettres</h2>
        </Link>

        <Link to="/picture">
          <h2 className="theme"> Galerie </h2>
        </Link>
      </div>
      <img className="chat" src={chat} alt={chat} />
    </div>
  );
}

export default CategoryList;
