import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../../services/api/login/login.service';
import { Router } from '@angular/router';
import { ResponseI } from '../../../interfaces/response.interface';
import { LoginI } from '../../../interfaces/login.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  error: boolean = false;
  msj = "";

  ngOnInit(): void {
    localStorage.setItem("view", "login");
    localStorage.setItem("logged", "false");
  }

  onLogin(form: LoginI) {

    this.login.loginByEmail(form).subscribe(data => {
      let dataResponse: ResponseI = data;

      if (dataResponse.status == "200") {
        localStorage.setItem("token", dataResponse.token);
        localStorage.setItem("logged", "true");
        localStorage.setItem("user", JSON.stringify(dataResponse.user));
        localStorage.setItem("typeids", JSON.stringify(dataResponse.typeids))
        localStorage.setItem("areas", JSON.stringify(dataResponse.areas))
        localStorage.setItem("countries", JSON.stringify(dataResponse.countries))
        localStorage.setItem("users", JSON.stringify(dataResponse.users))
        this.msj = "the login was successfully";
        this.router.navigate(['home']);
      }

      if (dataResponse.status == "204") {
        this.error = true;
        this.msj = dataResponse.result;
      }
    });
  }
}
