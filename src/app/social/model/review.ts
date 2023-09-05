import {Patient} from "../../security/model/patient";
import {Physiotherapist} from "../../security/model/physiotherapist";

export interface Review {
  id: number,
  patient: Patient,
  physiotherapist: Physiotherapist,
  stars: number,
  description: string,

}
