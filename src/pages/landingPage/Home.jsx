import { useScrollHome } from "../../utils";
import { Navbar } from "..";

const Home = () => {
  const { isScrolled } = useScrollHome();
  return (
    <div className="bg-black">
      <Navbar isScrolled={isScrolled} />
    </div>
  );
};
export default Home;
