import { BackgroundImage, Header } from "../../components";
import { useForm } from "../../utils";

const getSignupModel = () => ({
  email: "",
  password: "",
});

const Signup = () => {
  const {
    values,
    // setValues,
    errors,
    setErrors,
    handleInputChange,
  } = useForm(getSignupModel);

  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute top-0 left-0 w-full">
        <Header login />
        <div className="flex flex-col justify-center items-center gap-8 mt-[15vh]">
          <div className="flex flex-col justify-center items-center gap-3 text-center max-w-2xl">
            <h1 className="text-6xl font-bold text-white flex-wrap">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="text-3xl font-bold text-white flex-wrap ">
              Watch anywhere. Cancel anytime.
            </h4>
            <h6 className="text-xl font-semibold text-white">
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <form className=" flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-1">
              <input
                className="outline-none h-12 w-80 px-4 py-2"
                type="email"
                placeholder="Email Address"
                name="email"
                required
              />
              <input
                className="outline-none h-12 w-80 px-4 py-2"
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <input
              type="submit"
              className="bg-red-600 text-white font-bold text-lg px-4 py-1 rounded-lg hover:bg-red-800 hover:scale-105 duration-300 block"
              value="Log in"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
