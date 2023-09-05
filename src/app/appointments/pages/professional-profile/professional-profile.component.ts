import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";

@Component({
  selector: 'app-professional-profile-patient',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.css']
})
export class ProfessionalProfileComponent implements OnInit {
  physiotherapist$: Observable<Physiotherapist> | undefined

  constructor(private route:ActivatedRoute, private physiotherapistsService: PhysiotherapistsService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=> {
      const id = params['id'];
      this.physiotherapist$ = this.physiotherapistsService.getById(id);
    })
  }

}
