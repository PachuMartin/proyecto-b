import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { Empleado } from '../models/empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
 
  private urlEndPoint: string = URL_BACKEND+"/empleados";
  private urlRegistros: string = URL_BACKEND+'/empleados'

  constructor(private http: HttpClient) { }

  getEmpleadosAll(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.urlEndPoint)
  }

  crear(alu : Empleado):Observable<any>{
    return this.http.post(this.urlRegistros,alu)
  }

  getEmpleadoXId(id: number): Observable<Empleado>{
    return this.http.get<Empleado>(this.urlEndPoint+'/'+id)
  }
 
  
  eliminarEmpleado(id:number): Observable<any>{
    return this.http.delete(`${this.urlEndPoint}/${id}`);
  }

  editar(emp : Empleado):Observable<any>{
    return this.http.put(this.urlEndPoint+'/'+emp.id,emp);
  }
}
