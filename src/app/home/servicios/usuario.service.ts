import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint: string = URL_BACKEND+"/usuarios";
  private urlRegistros: string = URL_BACKEND+'/registrar'

  constructor(private http: HttpClient) { }

  getUsuariosAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlEndPoint)
  }

  crear(alu : Usuario):Observable<any>{
    return this.http.post(this.urlRegistros,alu)
  }

  getUsuarioXId(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.urlEndPoint+'/'+id)
  }
 
  
  eliminarUsuario(id:number): Observable<any>{
    return this.http.delete(`${this.urlEndPoint}/${id}`);
  }

  editar(alu : Usuario):Observable<any>{
    return this.http.put(this.urlEndPoint+'/'+alu.id,alu);
  }
}
