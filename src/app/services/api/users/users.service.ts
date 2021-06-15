import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { ResponseI } from '../../../interfaces/response.interface';
import { UserI } from '../../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api:ApiService,private http:HttpClient) { }

  RegisterUser(form:UserI):Observable<ResponseI>{
    let url = this.api.url + "registerUser";
    let headers  = this.api.headers();
    return this.http.post<ResponseI>(url,form,{headers});
  }

  GetUsers():Observable<ResponseI>{
    let url = this.api.url + "getUsers";
    let headers  = this.api.headers();
    return this.http.get<ResponseI>(url,{headers});
  }

  GetUser(id:string):Observable<ResponseI>{
    let url = this.api.url + "getUser/"+id;
    let headers  = this.api.headers();
    return this.http.get<ResponseI>(url,{headers});
  }

  EditUser(id:string,form:UserI):Observable<ResponseI>{
    let url = this.api.url + "editUser/"+id;
    let headers  = this.api.headers();
    return this.http.post<ResponseI>(url,form,{headers});
  }

  DeleteUser(id:string):Observable<ResponseI>{
    let url = this.api.url + "deleteUser/"+id;
    let headers  = this.api.headers();
    return this.http.delete<ResponseI>(url,{headers});
  }
}
