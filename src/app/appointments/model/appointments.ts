import {Physiotherapist} from "../../security/model/physiotherapist";
import {Patient} from "../../security/model/patient";

export interface Appointments {
  id: number,
  patient: Patient,
  physiotherapist: Physiotherapist,
  scheduledDate: string,
  topic: string,
  done: string,
  diagnosis: string,

}
