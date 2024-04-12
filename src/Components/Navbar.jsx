import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* navbar starts here */}

      <nav className="w-full h-[86px] flex bg-slate-200 justify-between px-4 shadow-lg md:px-4 ">
        {/* logo */}
        <img
          className="w-40 p-2 pl-12"
          src="src/assets/logo/Logo&Typography_LightBG.png"
        ></img>

        
          <div className="md:flex hidden h-full justify-center text-2xl font-normal">
            <div className="px-[15px] cursor:pointer flex items-center hover:bg-slate-600 hover:text-white hover:opacity-80 hover:scale-110 ">
              <Link to="/">Home</Link>
            </div>
            <div className="px-[15px] cursor:pointer flex items-center hover:bg-slate-600 hover:text-white  hover:opacity-80 hover:scale-110">
              <Link to="/Inventorypage">Inventory</Link>
            </div>
            <div className="px-[15px] cursor:pointer flex items-center hover:bg-slate-600 hover:text-white hover:opacity-80 hover:scale-110">
              <Link to="/About_Us">About Us</Link>
            </div>
            <div className="px-[15px] cursor:pointer flex items-center hover:bg-slate-600 hover:text-white hover:opacity-80 hover:scale-110">
              <Link to="/Contact_Us">Contact Us</Link>
            </div>
          </div>
        
        {/* <div className="flex items-center">
          <div className="hidden md:block md:max-w-[45px] p-2 cursor-pointer">
            <img src="src/assets/icons8-user-52.png"></img>
          </div>
        </div> */}
      </nav>
      {/* navbar ends here */}
    </>
  );
}

export default Navbar;
