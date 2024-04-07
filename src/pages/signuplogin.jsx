import { useState } from "react";

import Signup from "../Components/signup";
import Login from "../Components/login";


function Signuplogin() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log(toggle);
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <div className="flex justify-center mt-16 mb-10 ">
        <div className=" flex flex-col w-[600px] border-2 border-gray-300 shadow-lg px-5 py-3 rounded-xl ">
          <p className="text-center text-4xl font-bold pb-8 pt-5">Keyraya</p>
          <div className=" grid grid-cols-[250px,320px]">
            <div>
              <p className="text-center text-2xl font-semibold"> Sign up</p>
            </div>
            <div>
              <p className="text-center text-2xl font-semibold"> Log in</p>
            </div>
          </div>
          {/* <Signup /> */}
          <Login />
        </div>
      </div>
      
    </>
  );
}

export default Signuplogin;
