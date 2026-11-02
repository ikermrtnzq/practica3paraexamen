import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { ServiceApi } from '../../services/service.api';
import { Hospital } from '../../models/hospital';

@Component({
  selector: 'app-doctores-component',
  standalone: false,
  styleUrl: './doctores-component.css',
  templateUrl: './doctores-component.html',
})
export class DoctoresComponent implements OnInit{
  public doctores! : Array<Doctor>;
  private hospitales! : Array<Hospital>;
  @ViewChild("selectHospital") selectHospital! : ElementRef;
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceApi
  ){}

  async buscar() : Promise<void>{
    let seleccionados = []
    for (let hospital of this.selectHospital.nativeElement.options) {
      if(hospital.selected == true){
        seleccionados.push(hospital.value)
      }
    }
    console.log(seleccionados)
    this.doctores = await this._service.getDoctoresHospitales(seleccionados);
    this._cdr.detectChanges()
  }
  async borrar(id: number): Promise<void> {
    await this._service.deleteDoctor(id);
    this.doctores = await this._service.getDoctores();
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    this.hospitales= await this._service.getHospitales();
    this.doctores = await this._service.getDoctores();
    this._cdr.detectChanges()
  }
}
