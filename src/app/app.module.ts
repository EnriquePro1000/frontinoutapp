import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/sections/header/header.component';
import { FooterComponent } from './views/sections/footer/footer.component';
import { SidebarComponent } from './views/sections/sidebar/sidebar.component';
import { SecurityComponent } from './views/sections/modules/security/security.component';
import { EmployeesComponent } from './views/sections/modules/employees/employees.component';
import { CreatenewuserComponent } from './views/options/security/createnewuser/createnewuser.component';
import { EdituserComponent } from './views/options/security/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SecurityComponent,
    EmployeesComponent,
    CreatenewuserComponent,
    EdituserComponent,
  ],
  imports: [
    routing,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
