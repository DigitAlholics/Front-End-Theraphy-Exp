import {Physiotherapist} from "../../security/model/physiotherapist";

export interface Treatment {
  id:number,
  title: string,
  description: string,
  sessionsQuantity: number;
  physiotherapist: Physiotherapist,
  photoUrl: string,
  //videoSessions: string[]
}
