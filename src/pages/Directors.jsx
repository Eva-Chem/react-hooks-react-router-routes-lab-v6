import React from "react";
import NavBar from "../components/NavBar";
import directors from "../data/directors";

export default function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
