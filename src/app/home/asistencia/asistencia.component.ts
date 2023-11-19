import { Component, SimpleChanges } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../servicios/empleado.service';
import { Asistencia } from '../models/asistencia';
import { AsistenciaService } from '../servicios/asistencia.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent {
  
  // Declaro las variables
  objetoAsistencia:Asistencia;
  objetoEmpleado:Empleado;
  fecha = new Date;
hora = new Date();
dia = this.fecha.getDate

  listaAsistencias: Asistencia[] = [];
  listaEmpleados: Empleado[] = [];
  asistencia:Asistencia;
  fechaActual: Date = new Date();
  horaActual: string;

   
  constructor(private empleadoService: EmpleadoService , private asistenciaService: AsistenciaService){   
   

 //Cargamos la lista de Asistencia
    this.asistenciaService.getAsistenciasAll().subscribe(Response => {
      this.listaAsistencias=Response;        
      
    });
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

     //Cargamos la lista de empleados
    this.empleadoService.getEmpleadosAll().subscribe(response=> {
      this.listaEmpleados=response
    })
}



 // Este metodo se utilizara para filtrar la lista de asistencia segun fecha  
  compararFecha(){
 
  }

  // Metodo de entrada crea una asistencia y la guarda en la lista de asistencias

  entrada(id:number){
    this.empleadoService.getEmpleadoXId(id).subscribe(Response=>{
this.objetoEmpleado=Response
console.log(this.objetoEmpleado)
this.objetoAsistencia = {
  entrada:this.hora.toLocaleTimeString(),
  salida:null,
  empleado:this.objetoEmpleado,
  fecha:this.fecha
}
this.asistenciaService.crear(this.objetoAsistencia).subscribe(Response=>{
  console.log(Response)
})
    })

  }


  // metodo salida busca el id de asistencia y guarda el horario de salida

  salida(idAsistencia:number,empleado:Empleado,entrada:String,fecha:Date){
console.log(idAsistencia)

this.objetoAsistencia = {
  id:idAsistencia,
  entrada:entrada,
  salida:this.hora.toLocaleTimeString(),
  empleado:empleado,
  fecha:fecha
}

this.asistenciaService.editar(this.objetoAsistencia).subscribe(Response=>{

})

  }
}
