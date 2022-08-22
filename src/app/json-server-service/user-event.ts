import { EventAction} from "calendar-utils";

export interface UserEvent<MetaType = any>{
  id?: string | number;
  user_id: string | number;
  start: Date;
  end?: Date;
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
