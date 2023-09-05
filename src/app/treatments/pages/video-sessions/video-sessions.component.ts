import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {TreatmentsService} from "../../services/treatments.service";
import {Treatment} from "../../model/treatment";
import {UsersService} from "../../../security/services/users.service";

@Component({
  selector: 'app-video-sessions',
  templateUrl: './video-sessions.component.html',
  styleUrls: ['./video-sessions.component.css']
})
export class VideoSessionsComponent implements OnInit {

  treatment$: Observable<Treatment> | undefined;

  s_number=1;
  s_url:string="";
  s_value:boolean;

  userType: String;
  types:String []=["patient", "physiotherapist"]

  constructor(private usersService: UsersService,private route: ActivatedRoute, private treatmentsService: TreatmentsService ) {
    this.s_value=false;
    this.userType="";
  }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.treatment$ = this.treatmentsService.getById(id);
    });

    this.usersService.getById(Number(sessionStorage.getItem("userId"))).subscribe((response:any)=>{
      this.userType= String(response.type);
    })
  }

  nextSession(){
    this.s_number += 1;
    this.s_value=true;
  }

  prevSession(){
    if(this.s_number > 1){
      this.s_number-=1;
    }

    if(this.s_number == 1){
      this.s_value=false;
    }

  }

  setUrl(url: string){
    this.s_url=url;
  }

}
