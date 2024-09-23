import { useEffect, useState } from "react";
import { fetchMoviePage } from "../../apiMovie/api";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export default function MoviePage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backRefLocation = location.state ?? "/movie";

  useEffect(() => {
    const fetchMovieAsync = async () => {
      const movie = await fetchMoviePage(movieId);
      setMovie(movie);
    };

    fetchMovieAsync();
  }, [movieId]);

  const movieDetails = movie?.data;
  console.log(backRefLocation);

  return (
    <>
      <Link to={backRefLocation}>Back</Link>
      {movie && (
        <div>
          <h1>{movieDetails.original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              movieDetails.dataposter_path === null
                ? "123"
                : movieDetails.poster_path
            }`}
            alt="img"
          />
        </div>
      )}
      <Link to={"actors"}>actors</Link>
      <Link to="about">about</Link>
      <Outlet />
    </>
  );
}
