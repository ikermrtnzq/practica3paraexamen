import { Injectable, signal } from "@angular/core";
import { Empleado } from "../models/empleado";
import { ServiceEmpleados } from "./service.empleados";

@Injectable({providedIn : 'root'})
export class ServiceAuth{
    public usuario = signal<Empleado|null>(null);
    constructor(
        private _service : ServiceEmpleados
    ){}
    async loginAsync(token : string) : Promise<void>{
        sessionStorage.setItem("TOKEN", token);
        let empleado = await this._service.obtenerPerfil();
        this.usuario.set(empleado)
    }
    logout(): void{
        sessionStorage.removeItem("TOKEN");
        this.usuario.set(null)
    }
}