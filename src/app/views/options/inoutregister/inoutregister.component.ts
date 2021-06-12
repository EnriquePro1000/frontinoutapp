import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inoutregister',
  templateUrl: './inoutregister.component.html',
  styleUrls: ['./inoutregister.component.css']
})
export class InoutregisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("view","employees/in-out-register")
  }

}
