import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from "./storage.service";
import { ProfileComponent } from './profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate,CanDeactivate<ProfileComponent>{
  constructor(private storage:StorageService) { }
  canActivate(){
    return this.storage.getAuth();
  }
  canDeactivate(){
    if(this.storage.auth)
    {
      if(confirm("Warning: changes will be lost")==true)
        return true;
      else
        return false;
    }
    return true;
  }
}
