
import { RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
//import { NgModule } from '@angular/core';

import { LoginComponent } from './views/auth/login/login.component';


const appRoutes = [  
  {path: '**', pathMatch: 'full',redirectTo:''},
];
export const routing = RouterModule.forRoot(appRoutes);

