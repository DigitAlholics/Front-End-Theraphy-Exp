import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../../../security/model/physiotherapist";
import {ActivatedRoute} from "@angular/router";
import {ReviewsService} from "../../../services/reviews.service";
import {PhysiotherapistsService} from "../../../../security/services/physiotherapists.service";
import {Review} from "../../../model/review";
import { Router } from '@angular/router'
import {PatientsService} from "../../../../security/services/patients.service";

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  newReview: Review;
  physiotherapist$: Observable<Physiotherapist> | undefined
  currentUser: number;

  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];


  constructor(private route: ActivatedRoute, private navigator:Router, private reviewsService: ReviewsService, private physiotherapistsService: PhysiotherapistsService, private patientsService: PatientsService) {
    this.newReview={} as Review;
    this.currentUser = Number(sessionStorage.getItem("typeId"));

  }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.physiotherapist$ = this.physiotherapistsService.getById(id);

      this.physiotherapistsService.getById(id).subscribe((response: any) =>{
        this.newReview.physiotherapist=response;
      })

      this.patientsService.getById(this.currentUser).subscribe((response: any) =>{

        this.newReview.patient=response;
      })

    });
  }


  selectStar(value: any ): void{
    this.stars.filter( (star) => {

      if ( star.id <= value){

        star.class = 'star-gold star';

      }else{

        star.class = 'star-gray star';

      }

      return star;
    });


    this.selectedRating = value;

  }

  addReview(){



    this.newReview.id=0;

    this.newReview.stars=this.selectedRating;

    this.reviewsService.create(this.newReview).subscribe((response: any) => {})

    this.navigator.navigate(['/reviews', this.newReview.physiotherapist.id]);
  }

}
