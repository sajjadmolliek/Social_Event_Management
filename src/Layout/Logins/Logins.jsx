import { NavLink, useLocation, useNavigate } from "react-router-dom";
import usePrivateHook from "../../Hooks/usePrivateHook";

import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";

const Logins = () => {
  const { googleLogin, userLoginByEmailPassword } = usePrivateHook();
  const location = useLocation();
  const navigated = useNavigate();

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLoginByEmailPassword(email, password)
      .then(() => {
        swal("Yeahh!", "Successfully you Login in the account", "success");
        // Clear the input field values
        e.target.reset();
          navigated(location?.state ? location.state : "/");
      })
      .catch(() => {
        swal("Invalid Email or Password");
      });
  };
  const googleResister = () => {
    googleLogin()
      .then(() => {
          navigated(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal(errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleEmailPasswordLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label ">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <input
              type="submit"
              value={"Login"}
              className="text-white font-bold bg-blue-500 px-4 text-center py-3 rounded-lg"
            />
          </form>
          <div className="text-center">
            <h1>
              {`Don't`} have an account?{" "}
              <NavLink className={"text-blue-700"} to={"/resister"}>
                Create an account
              </NavLink>
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3 my-4">
            <div className="bg-black h-[1px] w-1/3"></div>
            <div>or</div>
            <div className="bg-black h-[1px] w-1/3"></div>
          </div>
          <button
            onClick={googleResister}
            className="grid grid-cols-3 font-bold border-2 px-4 text-center py-3 rounded-lg mx-7 mb-6 hover:bg-blue-500  hover:text-white"
          >
            <FcGoogle className="w-10 text-3xl  "></FcGoogle>
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logins;
