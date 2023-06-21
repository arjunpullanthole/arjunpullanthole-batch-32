import { Component } from '@angular/core';
import { StorageService } from "../storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private storageservice:StorageService) { }
  profile: any = {};
  ngOnInit() 
  {
    this.profile = this.storageservice.getScope();
  }
}
