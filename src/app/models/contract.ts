import { Time } from "@angular/common";

export interface Contract {
  Id : number,
  description : string,
  ref_code : string,
  status : string,
  StartDate : Time,
  EndDate : Time,
  state: string

 }

