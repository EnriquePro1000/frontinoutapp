import { Injectable } from '@angular/core';
import { ResponseI } from '../../interfaces/response.interface';
import { LoginI } from '../../interfaces/login.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost/inoutapp/api/public/api/';  

  headers(){
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Bearer "+ localStorage.getItem("token"));
    headers = headers.append("Accept", "application/json");
    return headers;
  }


  constructor() { }
}
