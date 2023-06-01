import { HomeCard } from "..";

const HomeCardSlider = ({ title, data }) => {
  return (
    <div className="">
      {data.map((movie, idx) => (
        <HomeCard movieData={movie} idx={idx} key={movie.id} />
      ))}
    </div>
  );
};
export default HomeCardSlider;
