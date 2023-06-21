import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() sentContact = new EventEmitter();
  @Input() random = "random";

  send(val:string)
  {
    this.sentContact.emit(val);
  }
}
