import { HomeCardSlider } from "..";

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  // TODO: Create Loader for HomeCardSlider
  // console.log(movies);
  return (
    <div className="container overflow-hidden">
      <HomeCardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <HomeCardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <HomeCardSlider
        title="Blockbuster Movies"
        data={getMoviesFromRange(20, 30)}
      />
      <HomeCardSlider
        title="Popular On Netflix"
        data={getMoviesFromRange(30, 40)}
      />
      <HomeCardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
      <HomeCardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </div>
  );
};
export default Slider;
