import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {NgFor} from "@angular/common";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {PatientsService} from "../../services/patients.service";
import {Patient} from "../../model/patient";
import {Physiotherapist} from "../../model/physiotherapist";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData!: User;
  newUser: User;
  users: User[]=[];
  newPatient: Patient;

  newPhysiotherapist: Physiotherapist;
  submitted: boolean = false;
  isEditMode: boolean = false;
  types: string[] = [
    "patient", "physiotherapist"
  ]


  @ViewChild('signupForm', {static: true})
  signupForm!: NgForm;

  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', {validators: [Validators.required], updatedOn: 'change'}],
    paternalSurname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    maternalSurname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    password: ['', {validators: [Validators.required], updatedOn: 'change'}],
    email: ['', {validators: [Validators.required], updatedOn: 'change'}],
    birthdayDate: ['', {validators: [Validators.required], updatedOn: 'change'}],
    type: ['', {validators: [Validators.required], updatedOn: 'change'}],
  })

  constructor(private usersService: UsersService, private formBuilder: FormBuilder,
              private router: Router, private physiotherapistsService: PhysiotherapistsService, private patientsService: PatientsService) {
    this.userData = {} as User;
    this.newUser={}as User;
    this.newPatient={}as Patient;
    this.newPhysiotherapist={}as Physiotherapist;
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((response: any) =>{
      this.users=response.content;
      console.log(this.users.length)
    })
  }

  get first_name() {
    return this.registerForm.get('firstName');
  }

  get paternal_surname() {
    return this.registerForm.get('paternalSurname');
  }

  get maternal_surname() {
    return this.registerForm.get('maternalSurname');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get birthday () {
    return this.registerForm.get('birthdayDate');
  }

  get type() {
    return this.registerForm.get('type');
  }

  addUser(){
    this.newUser.id=0;
    this.newUser.email=this.registerForm.value.email;
    this.newUser.password=this.registerForm.value.password;
    this.newUser.type=this.registerForm.value.type;


    this.usersService.create(this.newUser).subscribe(response=>{


      if(this.newUser.type=="patient"){

        this.newPatient.id=0;

        this.newPatient.userId=Number(this.users.length+1);

        this.newPatient.firstName=this.userData.firstName;
        this.newPatient.lastName=this.userData.paternalSurname+" "+this.userData.maternalSurname;


        this.newPatient.age=Number(new Date().getFullYear())-Number(this.userData.birthdayDate.split('/')[2]);
        this.newPatient.birthdayDate=this.userData.birthdayDate;
        this.newPatient.email=this.userData.email;
        this.newPatient.appointmentQuantity=0;
        this.newPatient.photoUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
        //this.newPatient.createdAt=new Date().toLocaleDateString();

        this.patientsService.create(this.newPatient).subscribe();
      }else{
        this.newPhysiotherapist.id=0;

        this.newPhysiotherapist.userId=Number(this.users.length+1);

        this.newPhysiotherapist.firstName=this.userData.firstName;
        this.newPhysiotherapist.paternalSurname=this.userData.paternalSurname
        this.newPhysiotherapist.maternalSurname=this.userData.maternalSurname;
        this.newPhysiotherapist.specialization="physiotherapist";
        this.newPhysiotherapist.age=Number(new Date().getFullYear())-Number(this.userData.birthdayDate.split('/')[2]);
        this.newPhysiotherapist.location="Lima";
        this.newPhysiotherapist.birthdayDate=this.userData.birthdayDate;
        this.newPhysiotherapist.email=this.userData.email;
        this.newPhysiotherapist.rating=0;
        this.newPhysiotherapist.consultationsQuantity=0;
        this.newPhysiotherapist.photoUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

        this.physiotherapistsService.create(this.newPhysiotherapist).subscribe();
      }

      this.registerForm.reset();

      this.router.navigate(['login']);
    })






  }

}
