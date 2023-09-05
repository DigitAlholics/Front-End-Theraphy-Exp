import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {TreatmentsByPatient} from "../model/treatments-by-patient";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TreatmentsByPatientService extends BaseService<TreatmentsByPatient> {

  endPoint = '/treatments_by_patient';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }

}
