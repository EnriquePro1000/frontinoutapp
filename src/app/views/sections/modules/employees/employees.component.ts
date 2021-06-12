import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }
active = false;
opt1 = false;

  ngOnInit(): void {
    if(localStorage.getItem("view")?.includes("employees")){
      this.active = true;
      if(localStorage.getItem("view")?.includes("in-out-register")){
        this.opt1 = true;
      }
    }else{
      this.active = false;
    }
  }

}
