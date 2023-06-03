import { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { HomeCard } from "..";

const HomeCardSlider = ({ title, data }) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef();

  const handleDirection = (direction) => {
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.scrollLeft = listRef.current.scrollLeft - 239;
      setSliderPosition(sliderPosition - 1);
    }

    if (direction === "right" && sliderPosition < 9) {
      listRef.current.scrollLeft = listRef.current.scrollLeft + 239;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <div
      className="container flex flex-col gap-4 relative py-8 mx-auto max-w-[100rem] overflow-x-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h2 className="text-3xl font-bold text-white ml-12">{title}</h2>
      <div className="relative">
        <span
          className={`${
            showControls ? "visible" : "invisible"
          } slider-arrow left-0`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </span>
        <div
          className="mx-14 duration-300 ease-in-out overflow-x-scroll scroll no-scrollbar whitespace-nowrap scroll-smooth"
          ref={listRef}
        >
          <div className="flex gap-4 w-max ">
            {data.map((movie, idx) => (
              <HomeCard movieData={movie} idx={idx} key={movie.id} />
            ))}
          </div>
        </div>
        <span
          className={`${
            showControls ? "visible" : "invisible"
          } slider-arrow right-0`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </span>
      </div>
    </div>
  );
};
export default HomeCardSlider;
