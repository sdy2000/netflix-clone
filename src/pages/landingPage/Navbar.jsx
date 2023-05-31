import { Link } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { firebaseAuth } from "../../utils/firebase/firebase-config";
import { signOut } from "firebase/auth";

const links = [
  { name: "Home", link: "/" },
  { name: "TV Shows", link: "/tv" },
  { name: "Movies", link: "/movies" },
  { name: "My List", link: "/mylist" },
];

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <nav className="container flex justify-between items-center">
      <div className="flex justify-center items-center gap-6">
        <Link to="/" className="hover:scale-105 duration-300">
          <img className="h-12 md:h-20" src="/assets/logo.png" alt="Logo" />
        </Link>
        <ul className="text-white flex justify-center items-center gap-4 font-semibold">
          {links.map((link, idx) => (
            <li key={idx}>{link.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className={`search ${showSearch ? "show-search" : ""}`}>
          <button
            className="text-white hover:text-red-600 hover:scale-110 duration-300"
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
            className="hidden"
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
        <button
          className="text-white hover:text-red-600 hover:scale-110 duration-300"
          onClick={() => signOut(firebaseAuth)}
        >
          <FaPowerOff size={20} />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
