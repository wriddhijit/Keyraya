import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="p-3 ">
        <div className="flex justify-center items-center p-4">
          Royal Enfield Continental GT 650
        </div>
        <div className=" flex justify-center items-center px-4">
          {/* picture */}
          <img
            className=""
            src="https://th.bing.com/th/id/OIP.4oi5fQiZUJmoTLK-2OuYGAHaFS?rs=1&pid=ImgDetMain"
            alt="Royal Enfield Continental GT 650"
          ></img>
        </div>

        {/* <div>
          <p className="text-center text-xs">Available at</p>
        </div>
        <div></div> */}
        <div className="flex items-center justify-around py-4">
          {/*time */}
          <div>
            {/* FromTIme */}
            fromtime
          </div>
          <div className=" p-2 w-8 h-8 flex rounded-full border-2 border-gray-200 shadow-lg bg-white">
            {/* TO */}
            <img src="https://th.bing.com/th/id/R.0673093bbfcecc10fc43a2e61243415c?rik=qmA2sEFmCjuKWQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-arrow-image%2ftransparent-arrow-image-3.png&ehk=q1%2b6xULlNSs6PGgvTMuuC9MdpzUXg186xJS2kWhEoj8%3d&risl=&pid=ImgRaw&r=0"></img>
          </div>
          <div>{/* ToTIme */} To time</div>
        </div>
        <div className="border-b border-gray-400"></div>
        <div className="flex items-center justify-around py-4">
          <div className="px-8 ">{/* price */}Price</div>
          <div className="border-l border-gray-300 h-12"></div>
          <div className="">
            {/* button */}
            <Link to="/Checkout">
              <button className="bg-red-700 text-center text-white text-base px-4 py-2 rounded-lg hover:bg-white hover:text-black">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        {/* <div className=" py-1">
          <p className=" text-center text-xs">Excess km charges: ₹/km</p>
          <p className=" text-center text-xs">Refundable security deposit: ₹</p>
        </div> */}
      </div>
    </>
  );
}

export default Card;
