import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {
  endPoint = '/users';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }



}
