import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor() { }
  active = false;
  opt1 = false;

  ngOnInit(): void {
    if(localStorage.getItem("view")?.includes("security")){
      this.active = true;
      if(localStorage.getItem("view")?.includes("create-new-user")){
        this.opt1 = true;
      }
    }else{
      this.active = false;
    }
    
  }

}
