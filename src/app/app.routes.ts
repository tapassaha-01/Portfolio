import { Routes } from '@angular/router';
import path from 'path';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    { path: '', component: LoginPageComponent, pathMatch: 'full' },
    // { path: '**', component: LoginPageComponent },
    { path: 'user', loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule) },
     

];
