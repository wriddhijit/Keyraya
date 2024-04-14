import Calendar from "./Date";
import TimePicker from "./Time";
import { useDropoffDate } from "./DropoffDate";
import { useDropoffTime } from "./DropoffTime";

function Dropoff() {

  const { setPickedValue } = useDropoffDate();
  const { setPickedTime } = useDropoffTime();

  const handleCalendarChange = (value) => {
    setPickedValue(value);
  };

  const handleTimeChange = (value) => {
    setPickedTime(value);
  };

  return (
    <>
      <div className="flex ">
        <div className=" border-2 border-gray-400">
          <Calendar onChange={handleCalendarChange} />
        </div>
        <div className="border-l border-black border-1 "></div>
        <div className=" border-2 border-gray-400 w-[200px]">
          <TimePicker onChange={handleTimeChange} />
        </div>
      </div>
    </>
  );
}

export default Dropoff;
