import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { ContainerComponent } from './container/container.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      ContainerComponent,
      NavigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
