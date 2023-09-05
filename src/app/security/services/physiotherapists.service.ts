import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Physiotherapist} from "../model/physiotherapist";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhysiotherapistsService extends BaseService<Physiotherapist>{

  endPoint = '/physiotherapists'

  constructor(http:HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
}
