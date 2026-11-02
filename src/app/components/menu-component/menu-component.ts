import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceAuth } from '../../services/service.auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private serviceAuth : ServiceAuth = inject(ServiceAuth);
  private usuario = this.serviceAuth.usuario;

  constructor(
    private _router : Router,
  ){}
  logout() : void {
    this.serviceAuth.logout();
    this._router.navigate(["/"])
  }
}
