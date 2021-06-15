import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseI } from '../../../../interfaces/response.interface';
import { UserI } from '../../../../interfaces/user.interface';
import { UsersService } from '../../../../services/api/users/users.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  date = new Date((new Date().getTime()));
  EditUserForm = new FormGroup({
    countryid: new FormControl(localStorage.getItem("EUCI"), Validators.required),
    typeid: new FormControl(localStorage.getItem("EUTI"), Validators.required),
    numberid: new FormControl(localStorage.getItem("EUNI")?.replace(/['"]+/g, ''), [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]),
    firstname: new FormControl(localStorage.getItem("EUFN")?.replace(/['"]+/g, ''), [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
    othername: new FormControl(localStorage.getItem("EUON")?.replace(/['"]+/g, ''), Validators.pattern(/^[a-zA-Z ]+$/)),
    flastname: new FormControl(localStorage.getItem("EUFLN")?.replace(/['"]+/g, ''), [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
    slastname: new FormControl(localStorage.getItem("EUSLN")?.replace(/['"]+/g, ''), [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
    areaid: new FormControl(localStorage.getItem("EUAI"), Validators.required),
    registerdate: new FormControl(this.date.toLocaleDateString('en-CA'), Validators.required)
  })

  error: boolean = false;
  exit: boolean = false;
  msj = "";

  constructor(private api: UsersService, private router: Router, private route: ActivatedRoute) { }
  typeids: any = null;
  areas: any = null;
  countries: any = null;
  user: any = null;
  id: any = null;

  ngOnInit(): void {
    localStorage.setItem("view", "home")
    this.typeids = localStorage.getItem("typeids")
    this.typeids = JSON.parse(this.typeids)
    this.areas = localStorage.getItem("areas")
    this.areas = JSON.parse(this.areas)
    this.countries = localStorage.getItem("countries")
    this.countries = JSON.parse(this.countries)
  }

  onEditUser(form: UserI) {
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.id = (params.get("id"))

      }
    })

    this.api.EditUser(this.id, form).subscribe(data => {
      let dataResponse: ResponseI = data;
      if (dataResponse.data.status == "200") {
        this.error = false;
        this.exit = true;
        this.msj = dataResponse.data.detail_es;
        console.log("EditUserSuccess:" + dataResponse.data.detail_en);

        this.api.GetUsers().subscribe(data => {
          let dataResponse: ResponseI = data;
          localStorage.setItem("users", JSON.stringify(dataResponse.data.users))
          console.log("GetUserSuccess:" + dataResponse.data.detail_en);
          setTimeout('window.location.href="/home"', 500);
        })

      }
      if (dataResponse.data.status == "422") {
        this.error = true;
        this.exit = false;
        this.msj = dataResponse.data.detail_es;
        console.log("EditUserFail:" + dataResponse.data.detail_en);
      }
    });
  }

  clear() {
    this.EditUserForm.reset()
  }
}
