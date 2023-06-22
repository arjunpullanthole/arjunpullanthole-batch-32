import { Component, OnInit } from '@angular/core';
import { StorageService } from "../storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private storageservice:StorageService, private router:Router) { }
  fname = "";
  password = "";
  profile: any = {};  
  submit()
  {
    this.profile = this.storageservice.getScope();
    if(this.profile.Firstname === this.fname && this.profile.Password === this.password )
    {
      alert("Logged In Successfully");
      this.storageservice.setAuth(true);
      this.router.navigate(['/profile']);
    }
    else
    {
      alert("Invalid Username or Password");
    }
  }

}
