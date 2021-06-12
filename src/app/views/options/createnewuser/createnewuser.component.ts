import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnewuser',
  templateUrl: './createnewuser.component.html',
  styleUrls: ['./createnewuser.component.css']
})
export class CreatenewuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("view","security/create-new-user")
  }

}
