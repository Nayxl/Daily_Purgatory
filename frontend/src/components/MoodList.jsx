import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import papier from "../assets/papier.png";

function MoodList() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`}/mood`)
      .then((res) => res.json())
      .then((data) => {
        setMoods(data);
      });
  }, []);

  return (
    <div className="container-page">
      <div>
        <Link to="/category">
          <h1 className="title"> Vos lettres </h1>
        </Link>
        <section className="body-page">
          {moods.length > 0 ? (
            moods.map((mood) => (
              <Link to={`/mood/${mood.mood_id}`}>
                <figure className="mood" key={mood.id}>
                  <img className="feuille-papier" src={papier} alt="pin" />
                  <figcaption className="mood-content">
                    <p>{mood.title}</p>
                    <p>{mood.description}</p>
                  </figcaption>
                </figure>
              </Link>
            ))
          ) : (
            <p className="no-add">Rien à afficher</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default MoodList;
