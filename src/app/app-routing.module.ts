import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { LoginComponent } from './home/login/login.component';
import { AsistenciaComponent } from './home/asistencia/asistencia.component';
import { GestionComponent } from './home/gestion/gestion.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  { path: 'inicio', component:InicioComponent},
  { path: 'login', component:LoginComponent},
  { path: 'asistencia', component:AsistenciaComponent},
  { path: 'gestion', component:GestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
