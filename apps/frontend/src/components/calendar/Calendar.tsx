import { useState } from "react";
import WeekView from "./WeekView";
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div>
      Calendar
      <WeekView currentDate={currentDate} />
    </div>
  );
};

export default Calendar;
