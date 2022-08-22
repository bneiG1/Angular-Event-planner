import { CalendarEvent } from "angular-calendar";

export interface User{
  id: number;
  username: string;
  email: string;
  password: string;
  events: CalendarEvent[];
}
