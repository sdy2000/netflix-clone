import { IoMdClose } from "react-icons/io";
import { IconButton } from "../../components";
import { Link } from "react-router-dom";

const HiddenNavbar = ({ isOpenList, setIsOpenList, links }) => {
  return (
    <div
      className={`hidden-nav fixed inset-0 bg-lbp dark:bg-dbp pb-5 overflow-auto
                     overscroll-contain z-30 xl:hidden duration-300 bg-black bg-opacity-95 h-screen
                     ${
                       !isOpenList
                         ? "-translate-x-[100%] invisible"
                         : "translate-x-[0] visible"
                     }`}
    >
      <div className="sticky w-full inset-0 bg-p pt-4 z-40">
        <div className="container flex justify-between border-b shadow-xl dark:border-das pb-5 px-6">
          <div className="flex justify-start items-center gap-1">
            <Link to="/" className="hover:scale-105 duration-300">
              <img className="h-12 md:h-20" src="/assets/logo.png" alt="Logo" />
            </Link>
            <span className="text-p text-xl md:text-2xl font-bold">Crypto</span>
          </div>
          <IconButton
            value={
              <IoMdClose
                className="text-white"
                size={40}
                onClick={() => setIsOpenList(!isOpenList)}
              />
            }
          />
        </div>
        <div className="w-full px-8 my-8">
          <ul className="text-white flex flex-col justify-start gap-4 font-semibold ">
            {links.map((link, idx) => (
              <li key={idx}>{link.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HiddenNavbar;
