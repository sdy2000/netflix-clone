import { BackgroundImage, Header } from "../../components";

const Signup = () => {
  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute top-0 left-0">
        <Header />
        <div className="">
          <div className="">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="">
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
