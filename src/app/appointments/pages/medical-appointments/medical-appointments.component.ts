import { Component, OnInit } from '@angular/core';
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {Appointments} from "../../model/appointments";
import {AppointmentsService} from "../../services/appointments.service";
import {UsersService} from "../../../security/services/users.service";
import {Observable, take} from "rxjs";
import {Patient} from "../../../security/model/patient";
import {PatientsService} from "../../../security/services/patients.service";
import {ActivatedRoute} from "@angular/router";
import {Treatment} from "../../../treatments/model/treatment";

@Component({
  selector: 'app-medical-appointments',
  templateUrl: './medical-appointments.component.html',
  styleUrls: ['./medical-appointments.component.css']
})
export class MedicalAppointmentsComponent implements OnInit {

  appointments: Appointments[]=[];
  physiotherapists: Physiotherapist[]=[];
  currentUser: number;
  filter:boolean;

  userType: String;
  types:String []=["patient", "physiotherapist"]


  constructor(private route:ActivatedRoute, private usersService: UsersService, private appointmentsService: AppointmentsService) {
    this.currentUser = Number(sessionStorage.getItem("typeId"));
    this.filter=true;
    this.userType="";

  }

  ngOnInit(): void {
    this.usersService.getById(Number(sessionStorage.getItem("userId"))).subscribe((response:any)=>{
      this.userType= String(response.type);
    })

    this.getAllAppointments();
  }

  getAllAppointments(){
    this.appointmentsService.getAll().subscribe((response: any) =>{
      this.appointments = response.content;
    })
  }




  filterToDone(){
    this.filter=true;
  }

  filterToToDO(){
    this.filter=false;
  }



  getAppointmentByPhysiotherapistName(name: string, appointmentsFiltered: Appointments[] = [], found: boolean = false) {

    for(let i = 0; i < this.appointments.length; i++) {
      if(this.appointments[i].physiotherapist.firstName.includes(name)
      || this.appointments[i].physiotherapist.paternalSurname.includes(name) ){
        appointmentsFiltered.push(this.appointments[i]);
        found = true;
      }
    }

    if(found && name!="") {
      this.appointments= appointmentsFiltered;
    } else{
      this.getAllAppointments();
    }



  }



    getAppointmentByPatientName(name: string, appointmentsFiltered: Appointments[] = [], found: boolean = false) {

    for(let i = 0; i < this.appointments.length; i++) {
      if(this.appointments[i].patient.firstName.includes(name) ||
        this.appointments[i].patient.lastName.includes(name)
      ){
        appointmentsFiltered.push(this.appointments[i]);
        found = true;
      }
    }

    if(found && name!="") {
      this.appointments=  appointmentsFiltered;
    } else{
      this.getAllAppointments();
    }



  }


}
