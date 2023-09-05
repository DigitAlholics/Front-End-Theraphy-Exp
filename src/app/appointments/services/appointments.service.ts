import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Appointments} from "../model/appointments";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService extends BaseService<Appointments> {
  endPoint = '/appointments';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
}
