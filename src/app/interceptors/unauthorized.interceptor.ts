import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor{
    constructor(private router:Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(
           catchError((err) => {
               console.log(err);
               if([401].indexOf(err.status) !== -1){
               localStorage.clear()
               window.location.href="/login"
               
                this.router.navigate(['login']); 
               // this.router.navigateByUrl('login' + err.status); 
               }
               return throwError(err);
           })
       )
    }

}