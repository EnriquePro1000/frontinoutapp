import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseI } from '../../../../interfaces/response.interface';
import { UserI } from '../../../../interfaces/user.interface';
import { UsersService } from '../../../../services/api/users/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createnewuser',
  templateUrl: './createnewuser.component.html',
  styleUrls: ['./createnewuser.component.css']
})
export class CreatenewuserComponent implements OnInit {

  date = new Date((new Date().getTime()));
  RegisterUserForm = new FormGroup({
    countryid: new FormControl('', Validators.required),
    typeid: new FormControl('', Validators.required),
    numberid: new FormControl('', Validators.pattern(/^[a-zA-Z0-9-]+$/)),
    firstname: new FormControl('', [Validators.pattern(/^[a-zA-Z ]+$/)]),
    othername: new FormControl('', Validators.pattern(/^[a-zA-Z ]+$/)),
    flastname: new FormControl('', Validators.pattern(/^[a-zA-Z ]+$/)),
    slastname: new FormControl('', Validators.pattern(/^[a-zA-Z ]+$/)),
    areaid: new FormControl('', Validators.required),
    registerdate: new FormControl(this.date.toLocaleDateString('en-CA'), Validators.required)
  })

  error: boolean = false;
  exit: boolean = false;
  msj = "";

  constructor(private users: UsersService, private router: Router) { }
  typeids: any = null;
  areas: any = null;
  countries: any = null;

  ngOnInit(): void {
    localStorage.setItem("view", "security/create-new-user")
    this.typeids = localStorage.getItem("typeids")
    this.typeids = JSON.parse(this.typeids)
    this.areas = localStorage.getItem("areas")
    this.areas = JSON.parse(this.areas)
    this.countries = localStorage.getItem("countries")
    this.countries = JSON.parse(this.countries)
  }

  onRegisterUser(form: UserI) {
    this.users.RegisterUser(form).subscribe(data => {
      let dataResponse: ResponseI = data;

      if (dataResponse.status == "200") {
        this.error = false;
        this.exit = true;
        this.msj = dataResponse.result;
        this.users.GetAllUsers().subscribe(data => {
          let dataResponse: ResponseI = data;
          localStorage.setItem("users", JSON.stringify(dataResponse.users))
        })
        setTimeout('window.location.reload()', 500);
      }

      if (dataResponse.status == "204") {
        this.error = true;
        this.exit = false;
        this.msj = dataResponse.result;
      }

    });
  }

  clear() {
    this.RegisterUserForm.reset()
  }
}
