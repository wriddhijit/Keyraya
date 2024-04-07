import Calendar from "./Date";
import TimePicker from "./Time";

function Pickup() {
  return (
    <>
      <div className="flex">
        <div>
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

export default Pickup;
