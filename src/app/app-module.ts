import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { LoginComponent } from './components/login-component/login-component';
import { HomeComponent } from './components/home-component/home-component';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service.empleados';
import { ServiceAuth } from './services/service.auth';
import { AuthGuard } from './guards/auth-guard';
import { ServiceApi } from './services/service.api';
import { DoctoresComponent } from './components/doctores-component/doctores-component';
import { CreateDoctoresComponent } from './components/create-doctores-component/create-doctores-component';
import { UpdateDoctoresComponent } from './components/update-doctores-component/update-doctores-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    DoctoresComponent,
    CreateDoctoresComponent,
    UpdateDoctoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AuthGuard,
    ServiceApi,
    ServiceEmpleados,
    ServiceAuth,
  ],
  bootstrap: [App],
})
export class AppModule {}
