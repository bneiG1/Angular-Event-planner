import { UserEvent } from "./user-event";

export interface User{
  id?: number | string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  events: UserEvent[];
}
