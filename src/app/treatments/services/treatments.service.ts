import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Treatment} from "../model/treatment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TreatmentsService extends BaseService<Treatment>{

  endPoint = '/treatments';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }


}
