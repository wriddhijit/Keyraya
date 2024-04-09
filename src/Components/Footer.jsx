function Footer() {
  return (
    <>
      <div className="flex justify-around pb-28 border bg-zinc-800 text-white p-5 pt-7">
        <div className="mt-2">
          <img
            className="w-28 h-20 p-1"
            src="src/assets/Logo&Typography_DarkBG.png"
          ></img>
          {/* <p className="text-s font-semibold ">Keyraya</p> */}
          {/* <div className="border-t w-[70px] border-red-800 border-2 "></div> */}
          <p className="flex items-center text-xs pt-2 pb-2">
            <img
              className="w-6 h-5 pr-1"
              src="src/assets/icons8-email-100.png"
            ></img>
            <p className=" text-[16px]">info@keyraya.in</p>
          </p>
          {/* <p className="flex items-center text-xs">
              <img
                className="h-4 pr-1"
                src="src/assets/icons8-location-50.png"
              ></img>
              Bangalore 560073
            </p> */}
        </div>
        <div className="mt-2">
          <p className="text-s font-semibold">Company</p>
          <div
            className="border-t w-[70px]
             border-red-800 border-2 "
          ></div>
          <p className="text-xs pt-2 pb-2">About us</p>
          <p className="text-xs pb-2">Blogs</p>
          <p className="text-xs pb-2">Contact Us</p>
        </div>
        <div className="mt-2">
          <p className="text-s font-semibold">Policies</p>
          <div className="border-t w-[70px] border-red-800 border-2 "></div>
          <p className="text-xs pt-2 pb-2">Privacy policies</p>
          <p className="text-xs pb-2">Terms & Conditions</p>
        </div>
        <div className="mt-2">
          <p className="text-s font-semibold">Quick Lines</p>
          <div className="border-t w-[70px] border-red-800 border-2 "></div>
          <p className="text-xs pt-2 pb-2">Offers</p>
          <p className="text-xs pb-2">Indian Bike Routes</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
