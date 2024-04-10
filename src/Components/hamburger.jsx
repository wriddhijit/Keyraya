import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <div className="absolute left-4 top-3 rounded-full">
        <button
          className={`text-[38px] font-semibold transition-transform duration-500 ${
            isOpen ? "rotate-90" : ""
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <span className="text-6xl">×</span> : "☰"}
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "left-0 bg-black/50 absolute top-22 w-screen h-screen z-20 "
            : " left-0"
        } `}
      ></div>

      <div
        className={`transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } absolute z-20 text-xl uppercase font-bold tracking-wider w-[320px] text-black bg-slate-200 h-screen pl-5 top-22 left-0`}
      >
        <div className="flex items-center mt-16 h-[50px] px-[10px] cursor-pointer hover:bg-slate-300   ">
          <Link to="/signuplogin">Log in/Sign UP</Link>
        </div>
        <div className="border-b border-y-zinc-300"></div>
        <div className="flex items-center  h-[50px] px-[10px] cursor-pointer hover:bg-slate-300">
          <Link to="/Account">My Account</Link>
        </div>
        <div className="border-b border-y-zinc-300"></div>

        <div className="flex items-center  h-[50px] px-[10px] cursor-pointer hover:bg-slate-300">
          <Link to="/Inventorypage">Inventory</Link>
        </div>
        <div className="border-b border-y-zinc-300"></div>
        <div className="flex items-center  h-[50px] px-[10px]  cursor-pointer hover:bg-slate-300">
          <Link to="/">Blogs</Link>
        </div>
        <div className="border-b border-y-zinc-300"></div>
        <div className="flex items-center  h-[50px] px-[10px] cursor-pointer  hover:bg-slate-300">
          <Link to="/About_Us">About Us</Link>
        </div>

        <div className="border-b border-y-zinc-300"></div>
        <div className="flex items-center h-[50px] px-[10px] cursor-pointer  hover:bg-slate-300">
          <Link to="/About_Us">Privacy Policy</Link>
        </div>
        <div className="border-b border-y-zinc-300"></div>
      </div>
    </>
  );
}

export default Hamburger;
