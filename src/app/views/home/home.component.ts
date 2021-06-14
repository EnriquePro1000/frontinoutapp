import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/api/users/users.service';
import { ResponseI } from '../../interfaces/response.interface';
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

        if (dataResponse.status == "200") {
          this.api.GetAllUsers().subscribe(data => {
            let dataResponse: ResponseI = data;
            console.log(dataResponse.users)
            localStorage.setItem("users", JSON.stringify(dataResponse.users))
            this.exit = true;
            this.msj = "El usuario fue eliminado correctamente"
            setTimeout('window.location.reload()', 3000);
          })

        }

        if (dataResponse.status == "204") {
          this.api.GetAllUsers().subscribe(data => {
            let dataResponse: ResponseI = data;
            console.log(dataResponse.users)
            localStorage.setItem("users", JSON.stringify(dataResponse.users))
            this.error = true;
            this.msj = "El usuario no existe o fue eliminado antes"
            setTimeout('window.location.reload()', 3000);
          })
        }
      })
    }
  }
}
