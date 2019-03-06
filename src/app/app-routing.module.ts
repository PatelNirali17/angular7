import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { LoginGuardService } from './login-guard.service';
import { ChangePasswordComponent } from './forgot-password/change-password/change-password.component';
import { ForgotGuardService } from './forgot-guard.service';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'contact',component:ContactComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'success-login/:usnm',component:SuccessLoginComponent, canActivate: [LoginGuardService]},
  {path:'change-pass/:usnm',component:ChangePasswordComponent, canActivate: [ForgotGuardService]},
  {path:'calculator',component:CalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
