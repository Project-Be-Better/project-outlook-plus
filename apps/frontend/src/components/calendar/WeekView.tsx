import { weekdays, type Weekday } from "./types";

const hours = Array.from({ length: 24 }, (_, i) => i);

const WeekView = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="flex w-16 flex-col border-r border-gray-300">
        {/* Hours */}
        <div className="h-12"></div>
        {hours.map((hour) => (
          <div className="h-12" key={hour}>
            <h1>
              {hour === 0
                ? "12 AM"
                : hour < 12
                  ? `${hour} AM`
                  : hour === 12
                    ? "12 PM"
                    : `${hour - 12} PM`}
            </h1>
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
          {weekdays.map((day) => (
            <div key={day}>
              <div className="border-r border-gray-300">
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className="h-12 border-b border-gray-300 hover:bg-blue-100"
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
