import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    //private LoggedIn:LoginService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("logged") === "true" ) {
        this.router.navigate(['home']);
        return false;

      //  alert("bloqueado")
   
      //  this.LoggedIn.true = true;
      } else{
        
       
        return true;
      }

    
  }
  
}
