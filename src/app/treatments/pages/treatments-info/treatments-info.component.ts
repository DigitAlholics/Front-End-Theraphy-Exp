import {Component, Inject, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {Treatment} from "../../model/treatment";
import {ActivatedRoute, Router} from "@angular/router";
import {TreatmentsService} from "../../services/treatments.service";
import {TreatmentsByPatient} from "../../model/treatments-by-patient";
import {TreatmentsByPatientService} from "../../services/treatments-by-patient.service";
import {UsersService} from "../../../security/services/users.service";
import {PatientsService} from "../../../security/services/patients.service";


@Component({
  selector: 'app-treatments-info',
  templateUrl: './treatments-info.component.html',
  styleUrls: ['./treatments-info.component.css']
})
export class TreatmentsInfoComponent implements OnInit {
  treatment$: Observable<Treatment> | undefined;
  treatmentsByPatient: TreatmentsByPatient[]=[];
  newTreatmentByPatient: TreatmentsByPatient;
  currentUser: number;
  treatmentInfoId: number=0;
  treatmentId: number=0;
  userType: String;
  types:String []=["patient", "physiotherapist"];

    constructor(private usersService: UsersService, private route: ActivatedRoute,private navigator:Router,
              private treatmentsService: TreatmentsService, private treatmentsByPatientService: TreatmentsByPatientService,
              private patientsService: PatientsService) {
    this.newTreatmentByPatient={}as TreatmentsByPatient;
    this.currentUser = Number(sessionStorage.getItem("typeId"));
    this.userType="";
  }


  ngOnInit(): void {

    this.usersService.getById(Number(sessionStorage.getItem("userId"))).subscribe((response:any)=>{
      this.userType= String(response.type);
    })

     this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
       this.treatmentId = params['id'];
      this.treatmentInfoId=id;
      this.treatment$ = this.treatmentsService.getById(id);

      //Filling NewTreatmentByPatient


       this.newTreatmentByPatient.id=0;
       this.treatmentsService.getById(id).subscribe((response:any)=>{
         /*this.newTreatmentByPatient.title= response.content.title;
         this.newTreatmentByPatient.description= response.content.description;
         this.newTreatmentByPatient.sessionsQuantity= response.content.sessions_quantity;
         this.newTreatmentByPatient.physiotherapistId= response.content.physiotherapist_id;
         this.newTreatmentByPatient.photoUrl = response.content.photo;
         this.newTreatmentByPatient.videosSessions= response.content.videos_sessions;*/
         this.newTreatmentByPatient.treatment = response;
         console.log(this.newTreatmentByPatient.treatment);

       })

       this.patientsService.getById(this.currentUser).subscribe((response:any)=>{
         this.newTreatmentByPatient.patient=response;
         console.log(this.newTreatmentByPatient.patient);

       })

       /*this.newTreatmentByPatient.treatmentId=Math.floor(id);
       this.newTreatmentByPatient.patientId=this.currentUser;*/
       this.newTreatmentByPatient.registrationDate=String(new Date().getDate());
       console.log(this.newTreatmentByPatient.registrationDate);
       this.newTreatmentByPatient.progress=0;




    });

    this.treatmentsByPatientService.getAll().subscribe((response:any)=>{
      this.treatmentsByPatient = response.content;

    });



  }

  addTreatmentByPatient(){


      if(this.treatmentsByPatient.find(treatmentByPatient =>treatmentByPatient.patient.id===this.newTreatmentByPatient.patient.id && treatmentByPatient.treatment.id===this.newTreatmentByPatient.treatment.id)){
        this.navigator.navigate(['/video-sessions', this.newTreatmentByPatient.treatment.id]);
      }else{





        this.treatmentsByPatientService.create(this.newTreatmentByPatient).subscribe();





        this.navigator.navigate(['/video-sessions', this.newTreatmentByPatient.treatment.id]);
      }

    }

}
