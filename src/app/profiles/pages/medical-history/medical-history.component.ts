import { Component, OnInit } from '@angular/core';
import {MedicalHistoriesService} from "../../services/medical-histories.service";
import {Observable} from "rxjs";
import {MedicalHistory} from "../../model/medical-history";

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  medicalHistories: MedicalHistory[]=[];
  currentUser: number;

  constructor(private medicalHistoriesService: MedicalHistoriesService) {
    this.currentUser = Number(sessionStorage.getItem("userId"));

  }

  ngOnInit(): void {
    this.getAllMedicalHistories()
  }

  getAllMedicalHistories(){
    this.medicalHistoriesService.getAll().subscribe((response:any)=>{
      this.medicalHistories = response.content;
    })
  }

}
