import { Component, OnInit } from '@angular/core';
import {Education} from "../../model/education";
import {EducationService} from "../../services/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[]=[]
  currentUser: number;

  constructor(private educationService: EducationService) {
    this.currentUser = Number(sessionStorage.getItem("typeId"));
  }

  ngOnInit(): void {
    this.getAllEducations()
  }

  getAllEducations(){
    this.educationService.getAll().subscribe((response:any)=>{
      this.educations = response;
    })
  }

}
