import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth.service';
import { authGuard } from './auth.guard';
import { deactGuard } from './deact.guard';

const routes: Routes = [
  {path: "login",component: LoginComponent},
  {path: "signup",component: SignupComponent},
  {path: "profile",component: ProfileComponent,canActivate:[authGuard],canDeactivate:[deactGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
