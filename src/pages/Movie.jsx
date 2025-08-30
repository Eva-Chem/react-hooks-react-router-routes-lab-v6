import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import movies from "../data/movies.js";

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index} style={{ marginRight: "0.5rem" }}>{genre}</span>
      ))}
    </div>
  );
}
