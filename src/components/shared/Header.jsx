import { Link } from "react-router-dom";
import AccountingButton from "../buttons/AccountingButton";

const Header = (props) => {
  return (
    <div className="container flex justify-between items-center w-full">
      <Link to="/" className="hover:scale-105 duration-300">
        <img className="h-12 md:h-20" src="/assets/logo.png" alt="Logo" />
      </Link>
      <AccountingButton props={props} />
    </div>
  );
};
export default Header;
