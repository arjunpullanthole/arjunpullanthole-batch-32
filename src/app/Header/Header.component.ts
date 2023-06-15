import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  disp = "Login";
  clicked = false;
  constructor() { }

  ngOnInit() {
  }
  login(){
    this.clicked = !this.clicked;
    this.disp = this.clicked? "Logout" : "Login";
  }

}
