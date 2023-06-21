import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public scope: Object ={};

  public getScope(): Object
  {
    return this.scope;
  }

  public setScope(scope: any): void 
  {
    this.scope = scope;
  }
}
