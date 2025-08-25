// Supported views
export type ViewMode = "day" | "week" | "month";

// Days of the week (type-safe union)
export type Weekday = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
export const weekdays: Weekday[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color?: string;
}

// WeekView Props
// export interface WeekViewProps {
//   events: CalendarEvent[];
//   currentDate: Date;
//   onClickEvent?: (event: CalendarEvent) => void;
//   onSlotClick?: (date: Date) => void;
// }
export interface WeekViewProps {
  currentDate: Date;
  onSlotClick?: (date: Date) => void; // click empty slot
  onEventClick?: (eventId: string) => void; // later for event blocks
}
