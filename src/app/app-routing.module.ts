import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';

import { LoginGuard } from './guards/auth/login/login.guard';
import { LogoutGuard } from './guards/auth/logout/logout.guard';
//import { LogoutGuard } from './guards/login/logout.guard';
//import { RegisterGuard } from './guards/register/register.guard';
import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { CreatenewuserComponent } from './views/options/createnewuser/createnewuser.component';
import { InoutregisterComponent } from './views/options/inoutregister/inoutregister.component';

const routes:Routes = [
 // {path: '', component: LoginComponent},
  {path: '', component: LoginComponent,canActivate: [LoginGuard]},
  {path: 'home', component: HomeComponent,canActivate: [LogoutGuard]},
  {path: 'create-new-user', component: CreatenewuserComponent,canActivate: [LogoutGuard]},
  {path: 'in-out-register', component: InoutregisterComponent,canActivate: [LogoutGuard]},
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]
