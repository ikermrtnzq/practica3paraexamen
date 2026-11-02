import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Hospital } from "../models/hospital";
import { firstValueFrom } from "rxjs";
import { Doctor } from "../models/doctor";

@Injectable()
export class ServiceApi{
    url = environment.urlApi;

    constructor(
        private _http : HttpClient
    ){}

    async getHospitales(): Promise<Hospital[]>{
        let endpoint = "api/hospitales";
        return firstValueFrom(
            this._http.get<Hospital[]>(this.url+endpoint)
        )
    }
    async getEspecialidades(): Promise<string[]>{
        let endpoint = "api/Doctores/Especialidades";
        return firstValueFrom(
            this._http.get<string[]>(this.url+endpoint)
        )
    }
    async getDoctores() : Promise<Doctor[]>{
        let contenido = "";
        let url = environment.urlApi;
        let endpoint = "api/Doctores"
        console.log(url+endpoint)
        return firstValueFrom(
            this._http.get<Doctor[]>(url+endpoint)
        )
    }
    async getDoctor(id: number) : Promise<Doctor>{
        let contenido = "";
        let url = environment.urlApi;
        let endpoint = "api/Doctores/FindDoctor/"+id;
        console.log(url+endpoint)
        return firstValueFrom(
            this._http.get<Doctor>(url+endpoint)
        )
    }
    async getDoctoresHospitales(hospitales : Array<number>) : Promise<Doctor[]>{
        let contenido = "";
        let url = environment.urlApi;
        for(let hospital of hospitales){
            contenido+= "idhospital=" + hospital + "&";
        }
        contenido = contenido.substring(0, contenido.length-1);
        let endpoint = "api/Trabajadores/TrabajadoresHospitales?"+contenido;
        console.log(url+endpoint)
        return firstValueFrom(
            this._http.get<Doctor[]>(url+endpoint)
        )
    }
    async deleteDoctor(id : number): Promise<void>{
        let endpoint = "api/Doctores/" +id;
        await firstValueFrom(
            this._http.delete(this.url+endpoint)
        );
    }
    async createDoctor(doctor : Doctor): Promise<any>{
        let endpoint = "api/Doctores";
        let json = JSON.stringify(doctor);
        console.log(json)
        let header = new HttpHeaders().set("content-type","application/json");
        try {
            return await firstValueFrom(
                this._http.post(this.url + endpoint, json, {headers: header})
            );
        } catch (error: any) {
            if (error.status == 200) {
                console.log("Doctor creado correctamente");
                return;
            }
            throw error;
        }
    }
    async updateDoctor(doctor : Doctor): Promise<any>{
        let endpoint = "api/Doctores";
        let json = JSON.stringify(doctor);
        let header = new HttpHeaders().set("content-type","application/json");
        try {
            return await firstValueFrom(
                this._http.put(this.url + endpoint, json, {headers: header})
            );
        } catch (error: any) {
            if (error.status == 200) {
                console.log("Doctor actualizado correctamente");
                return;
            }
            throw error;
        }
    }
}