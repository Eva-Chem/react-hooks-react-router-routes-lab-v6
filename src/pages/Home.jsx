import React from "react";
import NavBar from "../components/NavBar.jsx";
import movies from "../data/movies.js";
import MovieCard from "../components/MovieCard.jsx";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
