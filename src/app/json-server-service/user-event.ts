export interface UserEvent{
  id: number | string;
  user_id: number | string;
  name: string;
  from_date: string;
  from_time: string;
  to_date: string;
  to_time: string;
  reccurence: boolean;
  description: string;
}
