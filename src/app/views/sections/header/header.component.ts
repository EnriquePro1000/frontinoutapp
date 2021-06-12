import { Component, OnInit } from '@angular/core';
import { ResponseI } from '../../../interfaces/response.interface';
import { LoginService } from '../../../services/auth/login/login.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../../auth/login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private login:LoginService) { }
user:any = null;
  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    
    this.user = JSON.parse(this.user);
  }

 

  onLogout(): void{

    this.login.logout().subscribe(data => {
 
    let dataResponse:ResponseI = data;
    if(dataResponse.status == "200"){
      console.log(data)
      localStorage.setItem("logged","false");
      localStorage.setItem("token","null");
      localStorage.setItem("user","null")
        window.location.href=""

   
  }else{
  } 
 
    });



}

}
