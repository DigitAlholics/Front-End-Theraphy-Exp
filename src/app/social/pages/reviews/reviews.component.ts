import { Component, OnInit } from '@angular/core';
import {Review} from "../../model/review";
import {ActivatedRoute} from "@angular/router";
import {ReviewsService} from "../../services/reviews.service";
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews$: Review[]=[]
  physiotherapist$: Observable<Physiotherapist> | undefined
  physiotherapist: Physiotherapist
  currentRating: number = 0;

  constructor(private route: ActivatedRoute, private reviewsService: ReviewsService, private physiotherapistsService: PhysiotherapistsService) {
    this.physiotherapist = {} as Physiotherapist;
  }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];

      this.physiotherapist$ = this.physiotherapistsService.getById(id);
      this.physiotherapistsService.getById(id).subscribe((response:any)=>{
        this.physiotherapist=response;
      });
      this.reviewsService.getItemByExternalId("reviews", id,"physiotherapists").subscribe((response:any)=>{
        this.reviews$=response.content;

        for(let i = 0;  i < this.reviews$.length; i++) {
          this.currentRating += this.reviews$[i].stars
        }
        this.currentRating /= this.reviews$.length;

        this.physiotherapist.rating=this.currentRating;

        this.physiotherapistsService.update(this.physiotherapist.id,this.physiotherapist).subscribe();
        console.log(this.physiotherapist);
     });

    });





  }

}
