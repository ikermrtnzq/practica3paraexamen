import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { ServiceApi } from '../../services/service.api';
import { Router } from '@angular/router';
import { Doctor } from '../../models/doctor';

@Component({
  selector: 'app-create-doctores-component',
  standalone: false,
  styleUrl: './create-doctores-component.css',
  templateUrl: './create-doctores-component.html',
})
export class CreateDoctoresComponent implements OnInit{
  public hospitales! : Array<Hospital>
  public especialidades! : Array<string>
  @ViewChild("cajaid") cajaId! : ElementRef;
  @ViewChild("cajanombre") cajanombre! : ElementRef;
  @ViewChild("selectespecialidad") selectespecialidad! : ElementRef;
  @ViewChild("cajasalario") cajasalario! : ElementRef;
  @ViewChild("selecthospital") selecthospital! : ElementRef;

  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceApi,
    private _router: Router
  ){}
  
  async ngOnInit(): Promise<void> {
    this.hospitales = await this._service.getHospitales();
    this.especialidades = await this._service.getEspecialidades();
    this._cdr.detectChanges();
  }
  async crearDoctor() : Promise<void>{
    let id = parseInt(this.cajaId.nativeElement.value);
    let apellido = this.cajanombre.nativeElement.value;
    let especialidad = this.selectespecialidad.nativeElement.value;
    let salario = parseInt(this.cajasalario.nativeElement.value);
    let hospital = parseInt(this.selecthospital.nativeElement.value);

    let doctor = new Doctor(id,apellido,especialidad,salario,hospital);

    await this._service.createDoctor(doctor);
    this._router.navigate(["/doctores"])
  }
}
