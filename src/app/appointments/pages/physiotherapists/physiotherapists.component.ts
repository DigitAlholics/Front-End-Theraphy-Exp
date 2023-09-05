import { Component, OnInit } from '@angular/core';
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {Treatment} from "../../../treatments/model/treatment";

@Component({
  selector: 'app-physiotherapists',
  templateUrl: './physiotherapists.component.html',
  styleUrls: ['./physiotherapists.component.css']
})
export class PhysiotherapistsComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[];

  constructor(private physiotherapistsService: PhysiotherapistsService) { }

  ngOnInit(): void {
    this.getAllPhysiotherapists()
  }

  getAllPhysiotherapists(){
    this.physiotherapistsService.getAll().subscribe((response: any) =>{
      this.physiotherapists = response.content;
    })
  }


    getPhysiotherapistByQuery(name: string, physiotherapistsFiltered: Physiotherapist[] = [], found: boolean = false) {

    for(let i = 0; i < this.physiotherapists.length; i++) {
      if(this.physiotherapists[i].firstName.includes(name) ||
        this.physiotherapists[i].paternalSurname.includes(name)){
        physiotherapistsFiltered.push(this.physiotherapists[i]);
        found = true;
      }
    }

    if(found && name!="") {
      this.physiotherapists=  physiotherapistsFiltered;
    } else{
      this.getAllPhysiotherapists();
    }



  }
}
