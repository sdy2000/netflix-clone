import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const HomeCard = ({ movieData, isLinked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-56 max-w-[14rem] h-full cursor-pointer "
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt={"card"}
        className="rounded w-full h-full z-10"
      />
      {isHovered && (
        <div className="absolute z-50 bg-zinc-900 h-max w-80 top-[0] left-0 rounded-md shadow-lg duration-300 ease-in-out">
          <div className="relative h-40">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt={"card"}
              className="absolute top-0 w-full h-[140px] object-cover rounded-md z-30"
              onClick={() => navigate("/player")}
            />
            <video
              className="absolute z-40 w-full h-40 object-cover rounded-md top-0 "
              src="/assets/Stranger-Things-4-Netflix.mp4"
              autoPlay
              loop
              controls
              muted
            />
          </div>
          <div className="text-white p-4 flex flex-col justify-start gap-3">
            <h3
              className="text-xl font-bold flex-wrap"
              onClick={() => navigate("/player")}
            >
              {movieData.name}
            </h3>
            <div className="flex justify-between items-center text-3xl">
              <div className="card-svg flex justify-start items-center gap-5">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLinked ? (
                  <BsCheck title="Remove From List" />
                ) : (
                  <AiOutlinePlus title="Add to my list" />
                )}
              </div>
              <div className="">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <ul className="flex justify-start items-center gap-3 text-sm font-bold">
              {movieData.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default HomeCard;
