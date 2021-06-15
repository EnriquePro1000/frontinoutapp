import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './guards/auth/login/login.guard';
import { LogoutGuard } from './guards/auth/logout/logout.guard';
import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { CreatenewuserComponent } from './views/options/security/createnewuser/createnewuser.component';
import { EdituserComponent } from './views/options/security/edituser/edituser.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [LogoutGuard] },
  { path: 'create-new-user', component: CreatenewuserComponent, canActivate: [LogoutGuard] },
  { path: 'edit-user/:id', component: EdituserComponent, pathMatch: 'full', canActivate: [LogoutGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]
