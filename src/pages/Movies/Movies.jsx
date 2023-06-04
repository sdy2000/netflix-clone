import { Navbar, NotAvailable } from "..";
import { SelectGenre, Slider } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, getGenres } from "../../store";

const Movies = () => {
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "movie" }));
  }, [dispatch, genresLoaded]);

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
      </div>
      <div className="pt-32">
        <div className="container ml-10 my-5">
          <SelectGenre genres={genres} type={"movie"} />
        </div>
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </>
  );
};
export default Movies;
