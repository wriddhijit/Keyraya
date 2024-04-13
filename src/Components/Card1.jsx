import { Link } from "react-router-dom";
// import { usePickupDate } from "./PickupDate";
// import { useDropoffDate } from "./DropoffDate";
// import { usePickupTime } from "./PickupTime";
// import { useDropoffTime } from "./DropoffTime";

function Card1() {
  // const { pickedValue } = usePickupDate();
  // const { pickedValue1 } = useDropoffDate();
  // const { pickedTime } = usePickupTime();
  // const { pickedTime1 } = useDropoffTime();

  return (
    <>
      <div className="p-3  border-2 border-gray-200 shadow-lg rounded-xl">
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

        {/* TIME */}

        {/* <div className="flex items-center justify-around py-6">          
          <div>            
            <p className=" tracking-wider leading-relaxed text-lg font-medium">
              {pickedValue ? pickedValue.toLocaleDateString() : ""}
            </p>
            <p className="text-center text-lg font-mono">{pickedTime}</p>
          </div>
          <div className=" p-2 w-8 h-8 flex rounded-full border-2 border-gray-200 shadow-lg bg-white">
            
            <img src="https://th.bing.com/th/id/R.0673093bbfcecc10fc43a2e61243415c?rik=qmA2sEFmCjuKWQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-arrow-image%2ftransparent-arrow-image-3.png&ehk=q1%2b6xULlNSs6PGgvTMuuC9MdpzUXg186xJS2kWhEoj8%3d&risl=&pid=ImgRaw&r=0"></img>
          </div>
          <div>
            
            <p className=" tracking-wider leading-relaxed text-lg font-medium">
              {pickedValue1 ? pickedValue1.toLocaleDateString() : ""}
            </p>
            <p className="text-center text-lg font-mono">{pickedTime1}</p>
          </div>
        </div> */}

        <div className="border-b border-gray-400 py-2"></div>
        <div className="flex items-center justify-around py-4">
          <div className="px-8 ">{/* price */}Price</div>
          <div className="border-l border-gray-300 h-12"></div>
          <div className="">
            {/* button */}
              <button className="bg-red-600 text-center text-white px-4 py-2 rounded-lg hover:bg-red-800 tracking-wider">
                Book Now
              </button>
            
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

export default Card1;
