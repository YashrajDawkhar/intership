import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginGuardGuard } from './login-guard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:"login" ,component:LoginComponent ,canActivate:[LoginGuardGuard]},
  {path:"register",component:RegisterComponent,canActivate:[LoginGuardGuard]},
  {path:"home",component:HomeComponent,canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
