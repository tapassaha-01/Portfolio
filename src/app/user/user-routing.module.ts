import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { PatientFormPageComponent } from './patient-form-page/patient-form-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
  {path:'appointment-form',component:AppointmentFormComponent},
  {path:'patient-form-page',component:PatientFormPageComponent},
  {path:'success-page',component:SuccessPageComponent},
  {path:'**',component:AppointmentFormComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
