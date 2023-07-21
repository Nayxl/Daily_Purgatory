import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pinImage from "../assets/pin.png";

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`}/note`)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  return (
    <div className="container-page">
      <div>
        <Link to="/category">
          <h1 className="title"> Vos notes </h1>
        </Link>
        <section className="body-page">
          {notes.length > 0 ? (
            notes.map((note) => (
              <figure className="post-it" key={note.id}>
                <img className="pin" src={pinImage} alt="pin" />
                <figcaption>
                  <p>{note.title}</p>
                </figcaption>
                <figcaption>
                  <p>{note.description} </p>
                </figcaption>
              </figure>
            ))
          ) : (
            <p className="no-add">Aucune note</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default NoteList;
