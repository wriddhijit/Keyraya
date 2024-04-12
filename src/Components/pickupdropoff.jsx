import Dropoff from "./Dropoff";
import Pickup from "./pickup";

function Pickupdropoff() {
  return (
    <>
      <div className="w-[200%] h-[120%] flex justify-center shadow-slate-950 rounded-md font-bold  text-white">
        <div className="p-5 pr-2 grid gap-3 border-white border-2 rounded-xl ">
          <div className="flex items:center">
            {/* find your ride */}
            <p className="text-left py-2 w-[400px] text-4xl border-b-2 border-white">
              Find your Ride
            </p>
          </div>
          <div className="">
            <p className="pb-2 text-2xl">Pickup </p>
            <Pickup />
            {/* pickup date and time */}
          </div>
          <div className="pb-2">
            <p className="pb-2 text-2xl">Dropoff </p>
            <Dropoff />
            {/* drop date and time */}
          </div>
          <div className="">
            {/* search button */}
            <button
              type="button"
              className=" w-36 bg-red-600 text-center text-white text-2xl px-4 py-2 hover:bg-red-800 tracking-wider"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pickupdropoff;
