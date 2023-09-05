import { Component, OnInit} from '@angular/core';
import {Treatment} from "../../model/treatment";
import {TreatmentsService} from "../../services/treatments.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../security/services/users.service";
import {TreatmentsByPatient} from "../../model/treatments-by-patient";




@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treatments: Treatment[]=[];
  userType: String;
  types:String []=["patient", "physiotherapist"]


  constructor(private usersService: UsersService, private treatmentsService: TreatmentsService, private route: ActivatedRoute, private router: Router) {
  this.userType="";
  }

  ngOnInit(): void {

    this.usersService.getById(Number(sessionStorage.getItem("userId"))).subscribe((response:any)=>{
     this.userType= String(response.type);

    })


    this.getAllTreatments();
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{
      this.treatments = response.content;
    })
  }

  getTreatmentByQuery(name: string, treatmentsFiltered: Treatment[] = [], found: boolean = false) {

    for(let i = 0; i < this.treatments.length; i++) {
      if(this.treatments[i].title.includes(name)){
        treatmentsFiltered.push(this.treatments[i]);
        found = true;
      }
    }

    if(found && name!="") {
      this.treatments=  treatmentsFiltered;
    } else{
      this.getAllTreatments();
    }



  }

}
