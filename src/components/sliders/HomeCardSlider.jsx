import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { HomeCard } from "..";

const HomeCardSlider = ({ title, data }) => {
  const [showControls, setShowControls] = useState(false);
  const [currentClientRect, setCurrentClientRect] = useState(0);
  const listRef = useRef();

  useEffect(() => {
    setCurrentClientRect(listRef.current.getBoundingClientRect().x);
  }, []);

  const handleDirection = (direction) => {
    let distance =
      listRef.current.getBoundingClientRect().x - currentClientRect;

    if (direction === "left") {
      if (distance >= 0) {
        listRef.current.style.transform = `translateX(-1200px)`;
      } else {
        listRef.current.style.transform = `translateX(${
          distance + currentClientRect
        }px)`;
      }
    }
    if (direction === "right") {
      if (distance <= -1200) {
        listRef.current.style.transform = `translateX(0px)`;
      } else {
        listRef.current.style.transform = `translateX(${
          distance - currentClientRect
        }px)`;
      }
    }
  };

  return (
    <div
      className="flex flex-col gap-4 relative py-8 mx-auto max-w-[100rem]"
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
        <div className="mx-14 overflow-x-clip">
          <div
            className="flex gap-4 w-max ease-in-out no-scrollbar whitespace-nowrap scroll-smooth duration-300"
            ref={listRef}
          >
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
