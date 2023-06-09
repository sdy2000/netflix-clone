import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { firebaseAuth } from "../../utils/firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { LogOutModal } from "../../components";
import { useScrollHome } from "../../utils";
import { BsList } from "react-icons/bs";
import HiddenNavbar from "./HiddenNavbar";

const links = [
  { name: "Home", link: "/" },
  { name: "TV Shows", link: "/tv" },
  { name: "Movies", link: "/movies" },
  { name: "My List", link: "/mylist" },
];

const Navbar = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const navigate = useNavigate();
  const { isScrolled } = useScrollHome();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
    console.log();
  }, [navigate]);

  return (
    <>
      <nav
        className={`${
          isScrolled ? "bg-black fixed w-full" : ""
        } px-10 flex justify-between items-center bg-opacity-90 duration-300 z-50`}
      >
        <div className="flex justify-center items-center gap-6">
          <Link to="/" className="hover:scale-105 duration-300">
            <img className="h-12 md:h-20" src="/assets/logo.png" alt="Logo" />
          </Link>
          <ul className="text-white hidden sm:flex justify-center items-center gap-4 font-semibold ">
            {links.map((link, idx) => (
              <li
                className="hover:scale-110 hover:text-gray-400 duration-300"
                key={idx}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div
            className={`${
              showSearch ? "w-60 border-2 border-white" : "w-0"
            } flex justify-center items-center gap-2 rounded-xl py-1 ease-in-out duration-300`}
          >
            <button
              className="home-nav-btn"
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch size={20} />
            </button>
            <input
              className={`${
                showSearch ? "flex" : "hidden"
              } bg-black opacity-60 outline-none text-white`}
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button className="home-nav-btn" onClick={() => setLogOut(true)}>
            <FaPowerOff size={20} />
          </button>
          <button
            className="home-nav-btn sm:hidden"
            onClick={() => setIsOpenList(!isOpenList)}
          >
            <BsList size={30} />
          </button>
        </div>
        <HiddenNavbar
          isOpenList={isOpenList}
          setIsOpenList={setIsOpenList}
          links={links}
        />
      </nav>

      {logOut && <LogOutModal onClose={() => setLogOut(false)} />}
    </>
  );
};
export default Navbar;
