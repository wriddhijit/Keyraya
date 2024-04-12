import AnimatedText from "../Components/animatedtext";

import Pickupdropoff from "../Components/pickupdropoff";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="object-cover relative">
        <img
          className="w-full h-[900px]"
          src="src/assets/home.png"
          alt="Cover Picture"
        ></img>

        <div className="absolute top-20 left-16">
          <p className="text-[50px] text-red-700 font-extrabold">
            Welcome to KEYRAYA
          </p>
        </div>

        <div className="absolute bottom-36 left-16 text-white">
          <div className="">
            <p className="text-left pb-2 uppercase text-[56px] font-bold">
              <AnimatedText />
            </p>
          </div>
          <p className="text-left uppercase text-[44px] font-bold">
            Rental Made Easy
          </p>
          <p className="text-left text-[24px] font-thin pt-2 pb-2">
            Feel and enjoy the torque with every twist of your wrist. With
            keyraya you can have the ride in its truest sense of the world{" "}
            <p>
              {" "}
              at your fingertips - With more than 50 bikes to choose from our
              inventory.
            </p>
          </p>

          <div className="">
            <Link
              to="/Inventorypage"
              className="inline-block bg-red-600 text-xl px-10 py-3 text-white hover:bg-red-800 tracking-wider"
            >
              <button type="button" className="">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute right-96 top-72  ">
        <Pickupdropoff />
        {/* login box */}
      </div>

      {/* viewport */}
      {/* figma react genrator */}
    </>
  );
};
export default Home;
