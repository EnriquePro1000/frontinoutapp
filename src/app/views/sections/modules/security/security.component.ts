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
  user: any = null;
  admin = false;

  ngOnInit(): void {
    this.user = localStorage.getItem("current.user");
    this.user = JSON.parse(this.user);

    if (this.user.role_id == 1) {
      this.admin = true;
    } else {
      this.admin = false;
    }

    if (localStorage.getItem("view")?.includes("security")) {
      this.active = true;
      if (localStorage.getItem("view")?.includes("create-new-user")) {
        this.opt1 = true;
      }
    } else {
      this.active = false;
    }
  }
}
