import { useRef, useState } from "react";
import { HomeCard, HomeSliderControl } from "..";

const HomeCardSlider = ({ title, data }) => {
  const [showControls, setShowControls] = useState(false);
  const listRef = useRef();

  return (
    <div
      className="container flex flex-col gap-4 relative py-8 mx-auto max-w-7xl overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="relative">
        <HomeSliderControl showControls={showControls} listRef={listRef} />
        <div className="overflow-hidden mx-14">
          <div
            className="flex gap-4 w-max whitespace-nowrap scroll-smooth duration-300 ease-in-out"
            ref={listRef}
          >
            {data.map((movie, idx) => (
              <HomeCard movieData={movie} idx={idx} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCardSlider;
