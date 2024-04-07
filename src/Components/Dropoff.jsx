import Calendar from "./Date";
import TimePicker from "./Time";

function Dropoff() {
  return (
    <>
      <div className="flex  ">
        <div className="">
          <Calendar />
        </div>
        <div className="border-l border-black border-1 "></div>
        <div>
          <TimePicker />
        </div>
      </div>
    </>
  );
}

export default Dropoff;