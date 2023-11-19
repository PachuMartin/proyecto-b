import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  form: FormGroup;
  loading = false;
  bandera: boolean = false;


  // variables para edicion de Usuario
  id: number;
  editing: boolean = false;
  usuario: Usuario;
  listUsuarios: Usuario[] = []
  desabilitado = false;




  constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.cargarDatosForm();

  }

  ngOnInit(): void {
    this.cargarUsuarios();

  }

  cargarDatosForm(): void {

    this.form = this.crearFormGroup();
  }

  crearFormGroup(): FormGroup {

    return new FormGroup({

      usuario: new FormControl('', [Validators.minLength(3), Validators.required]),
      contraseña: new FormControl('', [Validators.minLength(4), Validators.required]),

    })
  }

  ingresar() {
    const user = this.form.value.usuario
    const pass = this.form.value.contraseña
    console.log(this.form);

    this.desabilitado = true;

    for (const e of this.listUsuarios) {
      if (e.username.indexOf(user) >= 0 && e.password.indexOf(pass) >= 0) {
        console.log(pass, user);
        this.bandera = true;

      }

      if (this.bandera == true) {
        setTimeout(() => {
          this.router.navigate(['inicio'])
        }, 1500);
      } else {
        setTimeout(() => {
          console.log('usuario o contraseña incorrectos ');
          this.router.navigate(['login'])
          this.form.reset();
          this.desabilitado = false;
        }, 1500);

      }


    }


  }



  cargarUsuarios() {

    this.usuarioService.getUsuariosAll().subscribe(res => {
      console.log(res);

      this.listUsuarios = res as Usuario[];
      console.log(this.listUsuarios);
    })


  }





}
