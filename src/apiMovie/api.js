import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTA3NGM4YjkzZmM3YjBkY2JhMTZkNjdmZjZlYzc3MCIsIm5iZiI6MTcxOTMyOTM0NS4xMDgyNSwic3ViIjoiNjY3YWRlYTBkMjI0NmZmYmQxYTBiMzYwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dM_M8V-eplXoDJmrLE2Thd2n_HFnecf49_Jg4go8nVs",
  },
};
const moviePopularNow = "https://api.themoviedb.org/3/trending/movie/day";
export const moviesAPI = () => {
  const y = axios.get(moviePopularNow, options);

  //   console.log(y);

  return y;
};
export const moviesSearchAPI = (query, page) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=ru&page=${page}`,
    options
  );
};

export const fetchMoviePage = (id, x) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}${
      x === undefined ? "" : "/credits"
    }?language=en-US`,
    options
  );
};

