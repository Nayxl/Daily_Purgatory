import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <Link to="/category">
      <div>
        <h1 className="title"> Vos notes </h1>
        <section>
          {notes.length > 0 ? (
            notes.map((note) => (
              <figure key={note.id}>
                <figcaption>
                  <p>{note.title}</p>
                </figcaption>
              </figure>
            ))
          ) : (
            <p className="no-add">Aucune note</p>
          )}
        </section>
      </div>
    </Link>
  );
}

export default NoteList;
