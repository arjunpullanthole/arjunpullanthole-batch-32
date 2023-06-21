import { Component } from '@angular/core';
import { StorageService } from "../storage.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private storageservice:StorageService) { }
  profile = {
    Firstname: "",
    Lastname: "",
    Password:"",
    email : "",
    phone : "",
    dob: ""
  }
  get_val()
  {
    alert("Successfully created an account for "+this.profile.Firstname);
    this.storageservice.setScope(this.profile);
  }

}
