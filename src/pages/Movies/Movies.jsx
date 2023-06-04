import { Navbar, NotAvailable } from "..";
import { Slider } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, getGenres } from "../../store";

const Movies = () => {
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "movies" }));
  }, [dispatch, genresLoaded]);

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
      </div>
      <div className="pt-32">
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </>
  );
};
export default Movies;
