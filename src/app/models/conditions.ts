import { State } from "../enums/state";

export interface condition
{
  id:number,
  description : string,
  state :State,
  body : Text,
  contratId : number
  userInput: string;
}
