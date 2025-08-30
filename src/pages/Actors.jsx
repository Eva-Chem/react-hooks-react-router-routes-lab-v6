import React from "react";
import NavBar from "../components/NavBar.jsx";
import actors from "../data/actors.js";

export default function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
