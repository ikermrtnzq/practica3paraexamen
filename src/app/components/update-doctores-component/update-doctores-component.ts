import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceApi } from '../../services/service.api';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Doctor } from '../../models/doctor';
import { Hospital } from '../../models/hospital';

@Component({
  selector: 'app-update-doctores-component',
  standalone: false,
  styleUrl: './update-doctores-component.css',
  templateUrl: './update-doctores-component.html',
})
export class UpdateDoctoresComponent {
  public hospitales! : Array<Hospital>
  public especialidades! : Array<string>
  @ViewChild("cajaid") cajaId! : ElementRef;
  @ViewChild("cajanombre") cajanombre! : ElementRef;
  @ViewChild("selectespecialidad") selectespecialidad! : ElementRef;
  @ViewChild("cajasalario") cajasalario! : ElementRef;
  @ViewChild("selecthospital") selecthospital! : ElementRef;
  public doctor! : Doctor;
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceApi,
    private _router: Router,
    private _activeRouter: ActivatedRoute
  ){}
  
  async ngOnInit(): Promise<void> {
    this._activeRouter.params.subscribe(async (params : Params) => {
      let id = params['id'];
      this.doctor = await this._service.getDoctor(id);
      this._cdr.detectChanges();
    })
    this.hospitales = await this._service.getHospitales();
    this.especialidades = await this._service.getEspecialidades();
    this._cdr.detectChanges();
  }
  async modificar() : Promise<void>{
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
