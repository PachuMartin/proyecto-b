import { Time } from "@angular/common";
import { Empleado } from "./empleado";

export class Asistencia{
    id?:number;
    entrada:String;
    salida:String; 
    empleado:Empleado; 
    fecha:Date; 

}