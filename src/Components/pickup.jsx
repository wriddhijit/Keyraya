import Calendar from "./Date";
import TimePicker from "./Time";
import { usePickupDate } from "./PickupDate";
import { usePickupTime } from "./PickupTime";

function Pickup() {

  const { setPickedValue } = usePickupDate();
  const { setPickedTime } = usePickupTime();

   const handleCalendarChange = (value) => {
     setPickedValue(value);
   };
  
   const handleTimeChange = (value) => {
     setPickedTime(value);
   };
  
  return (
    <>
      <div className="flex">
        <div>
          <Calendar onChange={handleCalendarChange} />
        </div>
        <div className="border-l border-black border-1 "></div>
        <div>
          <TimePicker onChange={handleTimeChange} />
        </div>
      </div>
    </>
  );
}

export default Pickup;
