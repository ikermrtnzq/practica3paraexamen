import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { HomeComponent } from './components/home-component/home-component';
import { AuthGuard } from './guards/auth-guard';
import { DoctoresComponent } from './components/doctores-component/doctores-component';
import { CreateDoctoresComponent } from './components/create-doctores-component/create-doctores-component';
import { UpdateDoctoresComponent } from './components/update-doctores-component/update-doctores-component';

const routes: Routes = [
  {path :"", component: LoginComponent},
  {path :"home", component: HomeComponent, canActivate: [AuthGuard]},
  {path :"doctores", component: DoctoresComponent, canActivate: [AuthGuard]},
  {path :"crear", component: CreateDoctoresComponent, canActivate: [AuthGuard]},
  {path :"modificar/:id", component: UpdateDoctoresComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
