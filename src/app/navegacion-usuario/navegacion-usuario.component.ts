import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navegacion-usuario',
  templateUrl: './navegacion-usuario.component.html',
  styleUrls: ['./navegacion-usuario.component.scss']
})
export class NavegacionUsuarioComponent implements OnInit {
  isAdmin: boolean;
  constructor(public api:ApiService) { }

  ngOnInit() {
   this.isAdmin = this.api.comprobarRol();
  }

  logout(){
    this.api.cerrarSesion()
    }

}
