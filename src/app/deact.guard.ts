import { CanDeactivateFn } from '@angular/router';
import { StorageService } from './storage.service';
import { inject } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

export const deactGuard: CanDeactivateFn<ProfileComponent> = (component, currentRoute, currentState, nextState) => {
  const storage = inject(StorageService);
  if(storage.getAuth())
    {
      alert("Warning: changes will be lost");
    }
  return true;
};
