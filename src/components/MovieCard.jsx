import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </div>
  );
}
