import { useEffect, useState } from "react";
import { fetchMoviePage } from "../../apiMovie/api";
import { useParams } from "react-router-dom";

export default function Actors() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    const fetchActors = async () => {
      setActors(await fetchMoviePage(movieId, "x"));
    };
    fetchActors();
  }, [movieId]);


  const listActors = actors?.data?.cast;

  return (
    actors &&
    listActors.map(({ id, name, profile_path }) => (
      <div key={id}>
        <h4>{name}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt="234"
        />
      </div>
    ))
  );
}
