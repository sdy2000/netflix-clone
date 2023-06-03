import { useNavigate } from "react-router-dom";
const AccountingButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      className="accounting-button"
      onClick={() => navigate(props.props.login ? "/login" : "/signup")}
    >
      {props.props.login ? "Log In" : "Sign Up"}
    </button>
  );
};
export default AccountingButton;
