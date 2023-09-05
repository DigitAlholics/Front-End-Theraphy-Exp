import { Component, OnInit } from '@angular/core';
import {TreatmentsByPatient} from "../../model/treatments-by-patient";
import {TreatmentsByPatientService} from "../../services/treatments-by-patient.service";
import {Patient} from "../../../security/model/patient";

@Component({
  selector: 'app-treatments-by-patient',
  templateUrl: './treatments-by-patient.component.html',
  styleUrls: ['./treatments-by-patient.component.css']
})
export class TreatmentsByPatientComponent implements OnInit {

 treatmentsByPatient: TreatmentsByPatient[]=[];
 currentUser: number;

  constructor(private treatmentsByPatientService: TreatmentsByPatientService) {
    this.currentUser = Number(sessionStorage.getItem("userId"));

  }

  ngOnInit(): void {
  this.getAllTreatmentsByPatient()
  }

  getAllTreatmentsByPatient(){
    this.treatmentsByPatientService.getAll().subscribe((response:any)=>{
      this.treatmentsByPatient = response.content;
      console.log(this.treatmentsByPatient.length)
    })
  }

  /*getTreatmentByQuery(title: string){
    if(title?.length) {
      this.treatmentsByPatientService.getItemByField('title',title).subscribe((response: any)=> {
          this.treatmentsByPatient = response;
        }
      )}else{
      this.getAllTreatmentsByPatient();
    }
  }*/

  getTreatmentByQuery(name: string, treatmentsByPatientFiltered: TreatmentsByPatient[] = [], found: boolean = false) {

    for(let i = 0; i < this.treatmentsByPatient.length; i++) {
      if(this.treatmentsByPatient[i].treatment.title.includes(name)){
        treatmentsByPatientFiltered.push(this.treatmentsByPatient[i]);
        found = true;
      }
    }

    if(found && name!="") {
      this.treatmentsByPatient=  treatmentsByPatientFiltered;
    } else{
      this.getAllTreatmentsByPatient();
    }



  }

}
