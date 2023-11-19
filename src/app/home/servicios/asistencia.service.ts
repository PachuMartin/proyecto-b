import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Asistencia } from '../models/asistencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private urlEndPoint: string = URL_BACKEND+"/asistencias";
  private urlRegistros: string = URL_BACKEND+'/asistencias'

  constructor(private http: HttpClient) { }

  getAsistenciasAll(): Observable<Asistencia[]>{
    return this.http.get<Asistencia[]>(this.urlEndPoint)
  }

  crear(alu : Asistencia):Observable<any>{
    return this.http.post(this.urlRegistros,alu)
  }

  getAsistenciaXId(id: number): Observable<Asistencia>{
    return this.http.get<Asistencia>(this.urlEndPoint+'/'+id)
  }
 
  
  eliminarAsistencia(id:number): Observable<any>{
    return this.http.delete(`${this.urlEndPoint}/${id}`);
  }

  editar(emp : Asistencia):Observable<any>{
    return this.http.put(this.urlEndPoint+'/'+emp.id,emp);
  }
}
