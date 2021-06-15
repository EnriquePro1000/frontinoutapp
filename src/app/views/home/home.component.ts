import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/api/users/users.service';
import { ResponseI } from '../../interfaces/response.interface';
import { UserI } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: UsersService, private router: Router) { }
  users: any = null;
  countries: any = null;
  exit = false;
  error = false;
  msj = "";

  ngOnInit(): void {
    localStorage.setItem("view", "home")
    this.users = localStorage.getItem("users")
    this.users = JSON.parse(this.users)
    this.countries = localStorage.getItem("countries")
    this.countries = JSON.parse(this.countries)
  }

  onDelete(id: any, firstname: any, flastname: any) {

    if (confirm("¿Seguro desea eliminar el usuario " + firstname + " " + flastname + "?")) {

      this.api.DeleteUser(id).subscribe(data => {
        let dataResponse: ResponseI = data;

        if (dataResponse.data.status == "200") {
          this.api.GetUsers().subscribe(data => {
            let dataResponse: ResponseI = data;
            localStorage.setItem("users", JSON.stringify(dataResponse.data.users))
            console.log("GetUserSuccess:" + dataResponse.data.detail_en);
          })
          this.exit = true;
          this.msj = dataResponse.data.detail_es
          console.log("DeleteUserSuccess:" + dataResponse.data.detail_en);
          setTimeout('window.location.reload()', 500);

        }

        if (dataResponse.data.status == "204") {
          this.api.GetUsers().subscribe(data => {
            let dataResponse: ResponseI = data;
            localStorage.setItem("users", JSON.stringify(dataResponse.data.users))
            console.log("GetUserSuccess:" + dataResponse.data.detail_en);            
          })
          this.error = true;
            this.msj = dataResponse.data.detail_es
            console.log("DeleteUserFail:" + dataResponse.data.detail_en);
            setTimeout('window.location.reload()', 500);
        }
      })
    }
  }

  onEdit(id: any) {
    this.api.GetUser(id).subscribe(data => {
      let dataResponse: ResponseI = data;
      localStorage.setItem("EUCI", JSON.stringify(dataResponse.data.attributes.countryid))
      localStorage.setItem("EUTI", JSON.stringify(dataResponse.data.attributes.typeid))
      localStorage.setItem("EUNI", JSON.stringify(dataResponse.data.attributes.numberid))
      localStorage.setItem("EUFN", JSON.stringify(dataResponse.data.attributes.firstname))
      localStorage.setItem("EUON", JSON.stringify(dataResponse.data.attributes.othername))
      localStorage.setItem("EUFLN", JSON.stringify(dataResponse.data.attributes.flastname))
      localStorage.setItem("EUSLN", JSON.stringify(dataResponse.data.attributes.slastname))
      localStorage.setItem("EUAI", JSON.stringify(dataResponse.data.attributes.areaid))
      console.log("GetUserSuccess:" + dataResponse.data.detail_en);
      this.router.navigate(['/edit-user', id]);
    })



  }
}
