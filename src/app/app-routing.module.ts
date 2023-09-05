import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhysiotherapistsComponent} from "./appointments/pages/physiotherapists/physiotherapists.component";
import {PaymentsComponent} from "./appointments/pages/payments/payments.component";
import {ScheduleAppointmentsComponent} from "./appointments/pages/schedule-appointments/schedule-appointments.component";
import {TreatmentsComponent} from "./treatments/pages/treatments/treatments.component";
import {
  MedicalAppointmentsComponent
} from "./appointments/pages/medical-appointments/medical-appointments.component";
import {VideoSessionsComponent} from "./treatments/pages/video-sessions/video-sessions.component";
import {
  ProfessionalProfileComponent
} from "./appointments/pages/professional-profile/professional-profile.component";
import {TreatmentsInfoComponent} from "./treatments/pages/treatments-info/treatments-info.component";
import {ReviewsComponent} from "./social/pages/reviews/reviews.component";
import {NewReviewComponent} from "./social/pages/reviews/new-review/new-review.component";
import {
  TreatmentsByPatientComponent
} from "./treatments/pages/treatments-by-patient/treatments-by-patient.component";
import {ProfilePatientComponent} from "./profiles/pages/profile-patient/profile-patient.component";
import {MedicalHistoryComponent} from "./profiles/pages/medical-history/medical-history.component";
import {HomePatientComponent} from "./home/pages/home-patient/home-patient.component";
import {HomeDoctorComponent} from "./home/pages/home-doctor/home-doctor.component";
import {SignupComponent} from "./security/pages/signup/signup.component";
import {LoginComponent} from "./security/pages/login/login.component";
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";
import {ProfileDoctorComponent} from "./profiles/pages/profile-doctor/profile-doctor.component";
import {EducationComponent} from "./profiles/pages/education/education.component";
import {MyPatientsComponent} from "./appointments/pages/my-patients/my-patients.component";
import {DiagnosisComponent} from "./appointments/pages/diagnosis/diagnosis.component";

const routes: Routes = [
  {path: 'profile-patient', component: ProfilePatientComponent},
  {path:'physiotherapists', component: PhysiotherapistsComponent},
  {path:'treatments', component: TreatmentsComponent},
  {path:'treatments-info/:id', component: TreatmentsInfoComponent},
  {path:'payments', component: PaymentsComponent},
  {path:'schedule-appointments/:id', component: ScheduleAppointmentsComponent},
  {path: 'medical-appointments', component: MedicalAppointmentsComponent},
  {path: 'video-sessions/:id', component: VideoSessionsComponent},
  {path: 'professional-profile-patient/:id', component: ProfessionalProfileComponent},
  {path: 'reviews/:id', component: ReviewsComponent},
  {path: 'new-review/:id', component: NewReviewComponent},
  {path: 'my-treatments', component: TreatmentsByPatientComponent},
  {path: 'medical-history', component: MedicalHistoryComponent},
  {path: 'diagnosis/:id', component: DiagnosisComponent},

  {path: 'my-patients', component: MyPatientsComponent},
  {path: 'home-patient', component: HomePatientComponent},
  {path: 'home-doctor', component: HomeDoctorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'profile-physiotherapist', component: ProfileDoctorComponent},
  {path: 'education', component: EducationComponent},

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
