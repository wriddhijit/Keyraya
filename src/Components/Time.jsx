import  { useState } from "react";

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="w-64">
      <select
        id="time"
        name="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className="pl-3 pr-10 p-4 text-black text-md"
      >
        <option value="" disabled hidden>
          Select time
        </option>
        <option value="08:00 AM">08:00 AM</option>
        <option value="09:00 AM">09:00 AM</option>
        <option value="10:00 AM">10:00 AM</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default TimePicker;
