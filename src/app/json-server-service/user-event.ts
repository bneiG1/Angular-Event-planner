export interface UserEvent{
  id?: number | string;
  from: string;
  to: string;
  name: string;
  reccurence: boolean;
  day: string;
  description: string;
}
