import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, take} from "rxjs";
import {Appointments} from "../../model/appointments";
import {Patient} from "../../../security/model/patient";
import {AppointmentsService} from "../../services/appointments.service";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {PatientsService} from "../../../security/services/patients.service";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {NgForm} from "@angular/forms";
import {UsersService} from "../../../security/services/users.service";

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  patient$: Observable<Patient> | undefined
  physiotherapist$: Observable<Physiotherapist> | undefined
  appointmentData: Appointments


  currentUser: number;

  userType: String;
  types:String []=["patient", "physiotherapist"]

  @ViewChild('appointmentForm', {static: false})
  appointmentForm!: NgForm;

  constructor(private usersService: UsersService, private appointmentsService: AppointmentsService, private route:ActivatedRoute, private physiotherapistsService: PhysiotherapistsService, private patientsService: PatientsService) {
    this.currentUser = Number(sessionStorage.getItem("userId"));
    this.appointmentData={} as Appointments;
    this.userType="";

  }

  ngOnInit(): void {

    this.usersService.getById(Number(sessionStorage.getItem("userId"))).subscribe((response:any)=>{
      this.userType= String(response.type);
    })

    this.route.params.pipe(take(1)).subscribe((params)=> {
      const id = params['id'];
      this.appointmentsService.getById(id).subscribe((response:any)=>{
        this.appointmentData = response;
      })

    })

  }

  updateDiagnosis(){
   this.appointmentData.done = "true";
   this.appointmentsService.update(this.appointmentData.id, this.appointmentData)
      .subscribe((response:any) => {
      });
  }

  onSubmit(){
    if(this.appointmentForm.form.valid){
      console.log(' about to update');
      this.updateDiagnosis();
    }
  }

}
