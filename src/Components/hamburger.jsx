import { useState } from "react";
import { Link } from "react-router-dom";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        className={`transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } absolute z-20 text-xl uppercase font-bold tracking-wider w-[320px] text-black bg-slate-200 h-screen p-[2rem] pt-0 top-22 left-0`}
      >
        
          <div className="pt-16 h-[50px] px-[10px] hover:text-red-700 cursor-pointer hover:opacity-80 hover:scale-105">
            <Link to="/signuplogin">Log in/Sign UP</Link>
          </div>
          <div className="pt-16 h-[50px] px-[10px] hover:text-red-700 cursor-pointer hover:opacity-80 hover:scale-105">
            <Link to="/Inventorypage">Orders</Link>
          </div>
          <div className="pt-16 h-[50px] px-[10px] hover:text-red-700 cursor-pointer hover:opacity-80 hover:scale-105">
            <Link to="/">Offers</Link>
          </div>
          <div className="pt-16 h-[50px] px-[10px] hover:text-red-700 cursor-pointer hover:opacity-80 hover:scale-105">
            <Link to="/">Blogs</Link>
          </div>
          <div className="pt-16 h-[50px] px-[10px] hover:text-red-700 cursor-pointer hover:opacity-80 hover:scale-105">
            <Link to="/About_Us">Privacy Policy</Link>
          </div>
        </div>
      
    </>
  );
}

export default Hamburger;
