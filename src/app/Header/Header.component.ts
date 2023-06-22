import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent{
  constructor(public storageservice:StorageService,private router:Router) { }
  
  /*@Input() auth:any;
  @Output() sentChange = new EventEmitter();
  send()
  {
    this.sentChange.emit();
  }
  */
  auth :any;
  ngOnInit()
  {
    this.storageservice.auth.subscribe(x => this.auth = x ?"Logout":"Login");
  }
  login()
  {
    if(this.storageservice.getAuth())
    {
      this.storageservice.changeAuth();
    }
    this.router.navigate(['/login']);
  }
}
