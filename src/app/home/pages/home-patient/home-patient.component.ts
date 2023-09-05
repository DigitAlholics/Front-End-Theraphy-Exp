import { Component, OnInit } from '@angular/core';
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {Treatment} from "../../../treatments/model/treatment";
import {TreatmentsByPatient} from "../../../treatments/model/treatments-by-patient";
import {Appointments} from "../../../appointments/model/appointments";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {TreatmentsService} from "../../../treatments/services/treatments.service";
import {TreatmentsByPatientService} from "../../../treatments/services/treatments-by-patient.service";
import {AppointmentsService} from "../../../appointments/services/appointments.service";

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[];
  treatments: Treatment[]=[];
  myTreatments: TreatmentsByPatient[]=[];
  appointments: Appointments[]=[];
  currentUser: number;

  constructor(private physiotherapistsService: PhysiotherapistsService, private treatmentsService: TreatmentsService,
              private myTreatmentsService: TreatmentsByPatientService, private appointmentsService: AppointmentsService) {
    this.currentUser = Number(sessionStorage.getItem("typeId"));

  }

  ngOnInit(): void {
    this.getAllPhysiotherapists();
    this.getAllTreatments();
    this.getAllMyTreatments();
    this.getAllAppointments();
  }

  getAllAppointments(){
    this.appointmentsService.getAll().subscribe((response: any) => {
      this.appointments = response.content;
    })
  }

  getAllPhysiotherapists(){
    this.physiotherapistsService.getAll().subscribe((response: any) =>{
      this.physiotherapists = response.content;
    })
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{
      this.treatments = response.content;
    })
  }

  getAllMyTreatments(){
    this.myTreatmentsService.getAll().subscribe((response: any)=>{
      this.myTreatments = response.content;
    })
  }
}
