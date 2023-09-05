import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {PatientsService} from "../../services/patients.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  logged: boolean =false;
  currentUser!: User;


  constructor(private formBuilder: FormBuilder, private usersService: UsersService,
              private router: Router, private physiotherapistsService: PhysiotherapistsService, private patientsService: PatientsService) { }

  ngOnInit(): void {
  }

  submitted() {
    this.logged=true;
  }


  loginForm: FormGroup = this.formBuilder.group({
    email: ['', { validators: [Validators.required], updateOn: 'change'}],
    password: ['', {validators: [Validators.required ], updateOn: 'change'}]
  })

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password')
  }

  submitForm(){
    this.usersService.getAll1().subscribe(response=>{
      const user = response.content.find((a: any)=> {
        this.currentUser = a;
        return a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
      });


      if(user) {

        sessionStorage.setItem("userId", this.currentUser.id.toString());



        this.loginForm.reset();
        if(this.currentUser.type == "patient") {

          this.patientsService.getItemByField("userId", Number(sessionStorage.getItem("userId"))).subscribe((response:any)=>{
            sessionStorage.setItem("typeId", response.id.toString());
          });

          this.router.navigate(['home-patient'])
        }else {
          this.physiotherapistsService.getItemByField("userId", Number(sessionStorage.getItem("userId"))).subscribe((response: any) => {

            sessionStorage.setItem("typeId", response.id.toString());
          });

          this.router.navigate(['home-doctor'])
        }
      } else {
        alert("Incorrect email or password. Please try again.")
      }
    })
  }


}
