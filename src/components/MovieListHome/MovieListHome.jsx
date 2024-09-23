import { Link } from "react-router-dom";

export default function MovieListHome({ movies, location }) {
  return (
    <ul>
      {movies.data.results.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={location}>
            <h4>{movie.original_title}</h4>
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                movie.poster_path === null ? "123" : movie.poster_path
              }`}
              alt="img"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
