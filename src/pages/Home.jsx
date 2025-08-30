import Navbar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies"; // adjust path if needed

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
