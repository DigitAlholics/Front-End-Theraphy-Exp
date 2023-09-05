import {Treatment} from "./treatment";
import {Patient} from "../../security/model/patient";

export interface TreatmentsByPatient {
  id:number,
  treatment: Treatment,
  patient: Patient,
  /*title: string,
  description: string,
  sessionsQuantity: number,
  physiotherapistId: number,
  photoUrl: string,
  videosSessions: string[],*/
  registrationDate:string,
  progress:number
}
