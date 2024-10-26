import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentCancellationComponent } from './appointment-cancellation/appointment-cancellation.component';

const routes: Routes = [
  {path:'admin-verification',component:AdminVerificationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'appointment-cancellation',component:AppointmentCancellationComponent},
  {path:'**',component:AdminVerificationComponent},
  {path:'',component:AdminVerificationComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
