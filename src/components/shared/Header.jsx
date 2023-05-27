import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container flex justify-between items-center w-full">
      <Link to="/" className="hover:scale-105 duration-300">
        <img className="h-12 md:h-20" src="/assets/logo.png" alt="Logo" />
      </Link>
      <button
        className="bg-red-600 text-white font-bold text-lg px-4 py-1 rounded-lg hover:bg-red-800 hover:scale-105 duration-300"
        onClick={() => navigate(props.login ? "/login" : "/signup")}
      >
        {props.login ? "Log In" : "Sign In"}
      </button>
    </div>
  );
};
export default Header;
