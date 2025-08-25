import { weekdays } from "./types";
import type { Weekday, WeekViewProps } from "./types";

const hours = Array.from({ length: 24 }, (_, i) => i);

const WeekView = ({ currentDate, onSlotClick }: WeekViewProps) => {
  const formatHour = (hour: number): string => {
    if (hour === 0) {
      return "12 AM";
    }
    if (hour < 12) {
      return `${hour} AM`;
    }
    if (hour === 12) {
      return "12 PM";
    }
    return `${hour - 12} PM`;
  };

  const handleSlotClick = (dayIndex: number, hour: number) => {
    if (!onSlotClick) {
      console.log(`Clicked on , but nothing here. ${dayIndex} : ${hour}`);
      return;
    }

    const slotDate = new Date(currentDate);
    console.log(slotDate);
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="flex w-16 flex-col border-r border-gray-300">
        {/* Hours */}
        <div className="h-12"></div>
        {hours.map((hour) => (
          <div className="h-12" key={hour}>
            <h1>{formatHour(hour)}</h1>
          </div>
        ))}
      </div>
      {/* Main grid */}
      <div className="flex-1">
        {/* Day Headers */}
        <div className="grid h-12 grid-cols-7 border-b border-gray-300">
          {weekdays.map((day) => (
            <div
              key={day}
              className="flex items-center justify-center font-semibold"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Day Columns */}
        <div className="grid grid-cols-7">
          {weekdays.map((day, dayIndex) => (
            <div key={day}>
              <div className="border-r border-gray-300">
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className="h-12 border-b border-gray-300 hover:bg-blue-100"
                    onClick={() => handleSlotClick(dayIndex, hour)}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekView;
