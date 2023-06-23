import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { StorageService } from './storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  return storage.getAuth();
};
