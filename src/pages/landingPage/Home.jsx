import { Navbar } from "..";
import { BackgroundImage } from "../../components";

const Home = () => {
  return (
    <div className="relative">
      <BackgroundImage imgUrl={"/assets/home.jpg"} />
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};
export default Home;
