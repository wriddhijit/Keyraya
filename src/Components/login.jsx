import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <form className="max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email or Phone
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
              placeholder="Enter your email or phone number"
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
              >
                {showPassword ? (
                  <img
                    src="src/assets/icons8-hide-password-50.png"
                    alt="Hide Password"
                    className="h-6 w-6"
                  />
                ) : (
                  <img
                    src="src/assets/icons8-show-password-50.png"
                    alt="Show Password"
                    className="h-6 w-6"
                  />
                )}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              <input type="checkbox" className="mr-2 leading-loose" />
              I'm not a robot
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-[236px] rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>

        <p className="px-3 pt-4 text-balance text-center">
          By clicking through, I agree with the{" "}
          <Link to="/Terms&Conditions">
            <span className=" underline  text-blue-500">
              Terms & Conditions{" "}
            </span>
          </Link>
          and{" "}
          <Link to="/Privacy_Policy">
            <span className="underline text-blue-500">Privacy Policy</span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
