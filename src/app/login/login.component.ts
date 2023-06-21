import { Component } from '@angular/core';
import { StorageService } from "../storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private storageservice:StorageService) { }
  fname = "";
  password = "";
  profile: any = {};
  success = false;
    
  get_val()
  {
    this.profile = this.storageservice.getScope();
    if(this.profile.Firstname === this.fname && this.profile.Password === this.password )
    {
      alert("Logged In Successfully");
      this.success = true;
    }
    else
    {
      alert("Invalid Username or Password");
    }
  }

}
