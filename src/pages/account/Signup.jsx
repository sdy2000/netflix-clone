import { BackgroundImage, Header } from "../../components";
import { AccountingFormInput } from "../../components";
import { useForm } from "../../utils";

const getSignUpModel = () => ({
  email: "",
  password: "",
});

const Signup = () => {
  const { values, handleInputChange } = useForm(getSignUpModel);

  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute top-0 left-0 w-full">
        <Header login />
        <div className="flex flex-col justify-center items-center gap-8 mt-6 xxs:mt-14 xs:mt-20 sm:mt-28 lg:mt-32 duration-300">
          <div className="flex flex-col justify-center items-center gap-3 text-center lg:max-w-2xl">
            <h1 className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold text-white flex-wrap duration-300">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="text-lg sm:text-xl lg:text-3xl font-bold text-white flex-wrap ">
              Watch anywhere. Cancel anytime.
            </h4>
            <h6 className="text-sm lg:text-xl font-semibold text-white">
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <form className="flex flex-col justify-center items-center gap-4 ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-1">
              <AccountingFormInput
                type={"email"}
                name={"email"}
                id={"email"}
                placeholder={"Email Address"}
                onChange={handleInputChange}
                value={values.email}
              />
              <AccountingFormInput
                type={"password"}
                name={"password"}
                id={"password"}
                placeholder={"Password"}
                onChange={handleInputChange}
                value={values.password}
                hasIcon={true}
              />
            </div>
            <input
              type="submit"
              className="accounting-button block"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
