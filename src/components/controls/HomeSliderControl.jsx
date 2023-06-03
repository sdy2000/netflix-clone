import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HomeSliderControl = ({ showControls, listRef }) => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleDirection = (direction) => {
    if (direction === "left") {
      if (sliderPosition === 0) {
        listRef.current.style.transform = "translateX(-1360px)";
        setSliderPosition(-1360);
      } else {
        listRef.current.style.transform = `translateX(${
          sliderPosition + 340
        }px)`;
        setSliderPosition(sliderPosition + 340);
      }
    }
    if (direction === "right") {
      if (sliderPosition === -1360) {
        listRef.current.style.transform = "translateX(0px)";
        setSliderPosition(0);
      } else {
        listRef.current.style.transform = `translateX(${
          sliderPosition - 340
        }px)`;
        setSliderPosition(sliderPosition - 340);
      }
    }
  };

  return (
    <>
      <span
        className={`${
          showControls ? "visible" : "invisible"
        } slider-arrow left-0`}
      >
        <AiOutlineLeft onClick={() => handleDirection("left")} />
      </span>
      <span
        className={`${
          showControls ? "visible" : "invisible"
        } slider-arrow right-0`}
      >
        <AiOutlineRight onClick={() => handleDirection("right")} />
      </span>
    </>
  );
};
export default HomeSliderControl;
