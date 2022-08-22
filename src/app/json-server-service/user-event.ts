import { EventAction, EventColor } from "calendar-utils";

export interface UserEvent<MetaType = any>{
  id?: string | number;
  start: string;
  end?: string;
  title: string;
  color?: {
    primary: string,
    secondary: string
  }
  actions?: EventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
  meta?: MetaType;
}
