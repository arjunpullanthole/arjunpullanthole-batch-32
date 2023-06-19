import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile = {
    firstname: "Arjun",
    Lastname: "Pullanthole",
    email : "arjunpullanthole@gmail.com",
    phone : "480-389-5677",
    dob: "12-28-1995"
  }

}
