import { Link } from "react-router-dom";

export default function MovieListHome({ movies }) {
  return (
    <ul>
      {movies.data.results.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <li>
            <h4>{movie.original_title}</h4>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="img"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}
