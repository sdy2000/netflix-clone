import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { BackgroundImage, Header } from "../../components";
import { AccountingFormInput } from "../../components";
import { useForm } from "../../utils";
import { firebaseAuth } from "../../utils/firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const getSignUpModel = () => ({
  email: "",
  password: "",
});

const Login = () => {
  const { values, handleInputChange } = useForm(getSignUpModel);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
    console.log();
  }, [navigate]);

  console.log(error);
  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute top-0 left-0 w-full">
        <Header />
        <div className="mx-auto max-w-lg py-12 bg-black bg-opacity-75 flex flex-col justify-center items-center gap-6">
          <h1 className="text-white font-bold text-2xl">Log In</h1>
          <form
            className="flex flex-col justify-center items-center gap-4"
            onSubmit={handleFormSubmit}
          >
            <AccountingFormInput
              type={"email"}
              name={"email"}
              id={"email"}
              placeholder={"Email Address"}
              onChange={handleInputChange}
              value={values.email}
            />
            <p className="text-red-600 self-start text-sm">
              {error === "auth/user-not-found"
                ? "* User account not found"
                : ""}
            </p>
            <AccountingFormInput
              type={"password"}
              name={"password"}
              id={"password"}
              placeholder={"Password"}
              onChange={handleInputChange}
              value={values.password}
              hasIcon={true}
            />
            <p className="text-red-600 self-start text-sm">
              {error === "auth/wrong-password" ? "* Wrong password" : ""}
              {error === "auth/too-many-requests"
                ? "* Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
                : ""}
            </p>
            <input
              type="submit"
              className="accounting-button w-full"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
