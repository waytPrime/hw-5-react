import { useEffect, useState } from "react";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieListHome from "../../components/MovieListHome/MovieListHome";
import { moviesSearchAPI } from "../../apiMovie/api";
import { useLocation, useSearchParams } from "react-router-dom";

export default function MovieSearchPage() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
    const [query, setSearchQuery] = useSearchParams("");
    const location = useLocation();
    const backRefLocation = location ?? "/movie";

  const fetchMovie = async () => {
    if (query.size === 0) return;
    const fetch = await moviesSearchAPI(query.get("searchParam"), page);
    setMovieList(fetch);
  };

  return (
    <div>
      <MovieSearch
        query={query}
        setQuery={setSearchQuery}
        onFetch={fetchMovie}
      />
      {movieList.length !== 0 ? <MovieListHome movies={movieList} location={backRefLocation} /> : null}
    </div>
  );
}
