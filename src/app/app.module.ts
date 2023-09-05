import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";
import { PhysiotherapistsComponent } from './appointments/pages/physiotherapists/physiotherapists.component';
import {PhysiotherapistsService} from "./security/services/physiotherapists.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { TreatmentsComponent } from './treatments/pages/treatments/treatments.component';
import {TreatmentsService} from "./treatments/services/treatments.service";
import { VideoSessionsComponent } from './treatments/pages/video-sessions/video-sessions.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ScheduleAppointmentsComponent } from './appointments/pages/schedule-appointments/schedule-appointments.component';
import { PaymentsComponent } from './appointments/pages/payments/payments.component';
import { MedicalAppointmentsComponent } from './appointments/pages/medical-appointments/medical-appointments.component';
import { TreatmentsInfoComponent } from './treatments/pages/treatments-info/treatments-info.component';
import {
  ProfessionalProfileComponent
} from "./appointments/pages/professional-profile/professional-profile.component";
import {HeaderComponent} from "./components/header/header.component";
import { ReviewsComponent } from './social/pages/reviews/reviews.component';
import { NewReviewComponent } from './social/pages/reviews/new-review/new-review.component';
import { TreatmentsByPatientComponent } from './treatments/pages/treatments-by-patient/treatments-by-patient.component';
import { ProfilePatientComponent } from './profiles/pages/profile-patient/profile-patient.component';
import { MedicalHistoryComponent } from './profiles/pages/medical-history/medical-history.component';
import { HomeDoctorComponent } from './home/pages/home-doctor/home-doctor.component';
import { LoginComponent } from './security/pages/login/login.component';
import { SignupComponent } from './security/pages/signup/signup.component';
import { HomePatientComponent } from './home/pages/home-patient/home-patient.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { PhysiotherapistSidenavComponent } from './components/physiotherapist-sidenav/physiotherapist-sidenav.component';
import { ProfileDoctorComponent } from './profiles/pages/profile-doctor/profile-doctor.component';
import {EducationComponent} from './profiles/pages/education/education.component';
import {MatMenuModule} from "@angular/material/menu";
import {MyPatientsComponent} from "./appointments/pages/my-patients/my-patients.component";
import {DiagnosisComponent} from "./appointments/pages/diagnosis/diagnosis.component";



@NgModule({
  declarations: [
    AppComponent,
    PhysiotherapistsComponent,
    TreatmentsComponent,
    VideoSessionsComponent,
    SidenavComponent,
    ScheduleAppointmentsComponent,
    PaymentsComponent,
    MedicalAppointmentsComponent,
    TreatmentsInfoComponent,
    ProfessionalProfileComponent,
    HeaderComponent,
    ReviewsComponent,
    NewReviewComponent,
    TreatmentsByPatientComponent,
    ProfilePatientComponent,
    MedicalHistoryComponent,
    HomeDoctorComponent,
    LoginComponent,
    SignupComponent,
    HomePatientComponent,
    PageNotFoundComponent,
    PhysiotherapistSidenavComponent,
    ProfileDoctorComponent,
    EducationComponent,
    MyPatientsComponent,
    DiagnosisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressBarModule,
    MatMenuModule
  ],
  providers: [TreatmentsService,PhysiotherapistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
