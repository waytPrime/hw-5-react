import { Route, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./page/NotFound/NotFound";
import MoviePage from "./page/MoviePage/MoviePage";
import MovieSearchPage from "./page/MovieSearchPage/MovieSearchPage";
import Actors from "./page/Actors/Actors";
import About from "./page/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<MovieSearchPage />} />
          <Route path="/movie/:movieId" element={<MoviePage />}>
            <Route path="actors" element={<Actors />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
