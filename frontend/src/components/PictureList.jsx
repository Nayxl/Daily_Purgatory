import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PictureList() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`}/picture`
    )
      .then((res) => res.json())
      .then((data) => {
        setPictures(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`}/mood`)
      .then((res) => res.json())
      .then((data) => {
        setPictures(data);
      });
  }, []);

  return (
    <div className="container-page">
      <div>
        <Link to="/category">
          <h1 className="title"> Vos photos</h1>
        </Link>
        <section className="body-page">
          {pictures.length > 0 ? (
            pictures.map((picture) => (
              <figure className="picture" key={picture.id}>
                <figcaption>
                  <p className="picture-name"> {picture.name}</p>
                </figcaption>
                <Link to={`/mood/${picture.mood_id}`}>
                  <img
                    className="image-list"
                    src={`${import.meta.env.VITE_BACKEND_URL}${picture.image}`}
                    alt={picture.name}
                  />
                </Link>
              </figure>
            ))
          ) : (
            <p className="no-add">Aucunes photos</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default PictureList;
