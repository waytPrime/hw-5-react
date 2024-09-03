import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Navigation from "./components/Navigation/Navigation";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import NotFound from "./page/NotFound/NotFound";
import MoviePage from "./page/MoviePage/MoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<MovieSearch />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
