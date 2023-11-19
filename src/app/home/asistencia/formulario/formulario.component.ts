import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaService } from '../../servicios/asistencia.service';
import { Asistencia } from '../../models/asistencia';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
listaEmpleados:Empleado[]=[]
objetoAsistencia:Asistencia;
fecha = new Date;


hora = this.fecha.toLocaleTimeString
dia = this.fecha.toDateString
  form:FormGroup;
  objeto:Empleado;
  listaAsistencias:Asistencia[]=[];
  
  
    constructor(private asistenciaService:AsistenciaService ,private empleadoService:EmpleadoService, private activatedRoute:ActivatedRoute, private router: Router ){
  this.cargarDatosForm(); 
  
  
    }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.asistenciaService.getAsistenciasAll().subscribe(
        response=>{
          
          this.listaAsistencias=response;
          console.log(this.listaAsistencias)
        }
      )

      this.empleadoService.getEmpleadosAll().subscribe(response=> {
        this.listaEmpleados=response
      })
    }
  
    cargarDatosForm():void{
  this.form=this.crearFormGroup();
    }
  
    crearFormGroup():FormGroup{    
  return new FormGroup({
  legajo:new FormControl(''),
  entrada:new FormControl(''),
  salida:new FormControl(''),
  fecha: new FormControl(''),
  
  })
    }
   
  crear():void{
  
      this.asistenciaService.crear(this.form.value).subscribe(respuesta => {
        console.log(respuesta);
        console.log(this.form);
      
      })  
  
  }

  entrada(id:number){

    this.empleadoService.getEmpleadoXId(id).subscribe(response=>{

      
    })

    this.asistenciaService.crear(this.objetoAsistencia).subscribe(respuesta=> {
     console.log(respuesta)
    })
  }
  salida(){

  }

}
