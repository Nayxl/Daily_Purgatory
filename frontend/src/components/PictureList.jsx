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

  return (
    <Link to="/category">
      <div>
        <h1 className="title"> Vos photos</h1>
        <section>
          {pictures.length > 0 ? (
            pictures.map((picture) => (
              <figure key={picture.id}>
                <img src={picture.url} alt={picture.title} />
                <figcaption>
                  <p>{picture.title}</p>
                </figcaption>
              </figure>
            ))
          ) : (
            <p className="no-add">Aucune photo</p>
          )}
        </section>
      </div>
    </Link>
  );
}

export default PictureList;
