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

  constructor(private api: LoginService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  error: boolean = false;
  msj = "";

  ngOnInit(): void {
  }

  onLogin(form: LoginI) {

    this.api.loginByEmail(form).subscribe(data => {
      let dataResponse: ResponseI = data;

      if (dataResponse.data.status == "200") {
        localStorage.setItem("auth.token", dataResponse.data.token);
        localStorage.setItem("current.user", JSON.stringify(dataResponse.data.user));
        localStorage.setItem("typeids", JSON.stringify(dataResponse.data.typeids))
        localStorage.setItem("areas", JSON.stringify(dataResponse.data.areas))
        localStorage.setItem("countries", JSON.stringify(dataResponse.data.countries))
        localStorage.setItem("users", JSON.stringify(dataResponse.data.users))
        console.log("LoginSuccess:" + dataResponse.data.detail_en);
        window.location.href="/home"
        
      }

      if (dataResponse.data.status == "204") {
        this.error = true;
        this.msj = dataResponse.data.detail_es;
        console.log("LoginFail:" + dataResponse.data.detail_en);
      }
    });
  }
}
