import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent{
  constructor(private storageservice:StorageService){}
}
