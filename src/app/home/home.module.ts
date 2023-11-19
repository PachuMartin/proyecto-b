import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GestionComponent } from './gestion/gestion.component';
import { FormularioComponent } from './asistencia/formulario/formulario.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AsistenciaComponent,
    LoginComponent,
    InicioComponent,
    GestionComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
