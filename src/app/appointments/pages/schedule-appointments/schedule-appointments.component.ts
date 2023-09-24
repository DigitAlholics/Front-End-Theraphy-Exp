import {Component, OnInit, ViewChild} from '@angular/core';
import {Appointments} from "../../model/appointments";
import {AppointmentsService} from "../../services/appointments.service";
import {NgForm} from "@angular/forms";
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {PatientsService} from "../../../security/services/patients.service";
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-schedule-appointments',
  templateUrl: './schedule-appointments.component.html',
  styleUrls: ['./schedule-appointments.component.css']
})
export class ScheduleAppointmentsComponent implements OnInit {
  physiotherapist$: Observable<Physiotherapist> | undefined

  appointmentData: Appointments;


  currentUser: number;
  date: string;


  @ViewChild('appointmentForm', {static: false})
  appointmentForm!: NgForm;


  constructor(private appointmentsService: AppointmentsService, private route: ActivatedRoute, private physiotherapistsService: PhysiotherapistsService, private patientsService: PatientsService, private dialog: MatDialog) {
    this.appointmentData = {} as Appointments;
    this.date = "";
    this.currentUser = Number(sessionStorage.getItem("typeId"));

  }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=> {
      const id = params['id'];
      this.physiotherapist$ = this.physiotherapistsService.getById(id);
      console.log(id)

      this.physiotherapistsService.getById(id).subscribe((response: any) =>{
        this.appointmentData.physiotherapist=response;
      })
      this.patientsService.getById(this.currentUser).subscribe((response: any) =>{
        this.appointmentData.patient=response;
      })
    })

  }

  addAppointment(){
    this.appointmentData.id = 0;

    const slicedate = new Date(this.date).toLocaleString();
    this.appointmentData.scheduledDate = slicedate.split(',')[0];
    this.appointmentData.done="false";
    this.appointmentData.diagnosis="Blank diagnosis";

    this.appointmentsService.create(this.appointmentData).subscribe((response:any) =>{})
  }


  onSubmit() {
    if (this.appointmentForm.form.valid) {
      // Muestra el cuadro de diálogo
      this.openDialog();
  
      // Llama a this.addAppointment después de cerrar el cuadro de diálogo
      // Esto simula una demora antes de agregar la cita
      setTimeout(() => {
        this.addAppointment();
      }, 2000); // Cambia el valor a la cantidad de milisegundos de retraso deseada
    }
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent);
  
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed:', result);
    });
  }

}
