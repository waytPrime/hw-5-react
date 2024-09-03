import { useEffect } from "react";
import { moviesAPI } from "../../apiMovie/api";
import { useState } from "react";

import MovieListHome from "../../components/MovieListHome/MovieListHome";

export default function Home() {
  const [listMovie, setListMovie] = useState();
  useEffect(() => {
    const fetch = async () => {
      const movies = await moviesAPI();
      setListMovie(movies);
    };
    fetch();
  }, []);

  return (
    <>
      {listMovie && <MovieListHome movies={listMovie} />}
      
    </>
  );
}
