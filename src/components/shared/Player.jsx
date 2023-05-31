import { BsArrowLeft } from "react-icons/bs";
import IconButton from "../buttons/IconButton";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-4 left-3 text-white z-10 p-16">
        <IconButton
          value={<BsArrowLeft size={40} onClick={() => navigate(-1)} />}
        />
      </div>
      <video
        className="w-full h-full object-cover"
        src="/assets/Stranger-Things-4-Netflix.mp4"
        autoPlay
        loop
        controls
        muted
      ></video>
    </div>
  );
};
export default Player;
