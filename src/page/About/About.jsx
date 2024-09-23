import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviePage } from "../../apiMovie/api";

export default function About() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieAsync = async () => {
      const movie = await fetchMoviePage(movieId);
      setMovie(movie);
    };

    fetchMovieAsync();
  }, [movieId]);

  const movieDetails = movie?.data;

  console.log(movieDetails);

  return (
    movie && <div>
      <h2>About</h2>
      <p>{movieDetails.overview}</p>
    </div>
  );
}
