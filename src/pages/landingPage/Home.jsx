import { useNavigate } from "react-router-dom";
import { Navbar } from "..";
import { BackgroundImage, Slider } from "../../components";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, getGenres } from "../../store";

const Home = () => {
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [dispatch, genresLoaded]);

  return (
    <>
      <div className="relative">
        <BackgroundImage imgUrl={"/assets/home.jpg"} />
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        <div className=" absolute bottom-20 left-0 flex flex-col justify-center sm:justify-start gap-12 px-6 sm:px-20">
          <img src={"assets/homeTitle.webp"} alt="Movie Logo" />
          <div className="flex justify-center sm:justify-start items-center gap-6">
            <button
              onClick={() => navigate("/player")}
              className="movie-btn text-black bg-gray-300"
            >
              <FaPlay />
              Play
            </button>
            <button className="movie-btn text-gray-300 bg-gray-700 hover:bg-gray-900 opacity-80">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </>
  );
};
export default Home;
