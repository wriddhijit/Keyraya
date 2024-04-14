import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({onChange}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <div className="">
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Specify the desired date format
        className="p-4 text-black text-lg"
        placeholderText="Select a date"
        required
      />
    </div>
  );
};

export default Calendar;