import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="">
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="p-4 text-black text-md"
        placeholderText="Select a date"
      />
    </div>
  );
};

export default Calendar;
