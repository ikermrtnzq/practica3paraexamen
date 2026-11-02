import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Empleado } from "../models/empleado";

@Injectable()
export class ServiceEmpleados {
    url = environment.urlCredenciales;
    constructor(
        private _http : HttpClient
    ){}

    async loginAsync(credenciales : any) : Promise<any> {
        let endpoint = "auth/login";
        let json = JSON.stringify(credenciales);
        let header = new HttpHeaders().set("content-type","application/json");
        return firstValueFrom(
            this._http.post(this.url+endpoint,json, {headers : header})
        )
    }

    async obtenerPerfil(): Promise<Empleado> {
        const token = sessionStorage.getItem("TOKEN");
        let header = new HttpHeaders().set("authorization", "bearer " + token);
        let endpoint = "api/Empleados/PerfilEmpleado";
        return firstValueFrom(
            this._http.get<Empleado>(this.url+endpoint,{headers : header})
        )
    }
}