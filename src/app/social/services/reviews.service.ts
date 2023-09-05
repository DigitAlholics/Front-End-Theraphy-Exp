import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Review} from "../model/review";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ReviewsService extends BaseService<Review>{

  endPoint = '/reviews';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
}
