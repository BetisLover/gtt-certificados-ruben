import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion-usuario',
  templateUrl: './navegacion-usuario.component.html',
  styleUrls: ['./navegacion-usuario.component.scss']
})
export class NavegacionUsuarioComponent implements OnInit {
  isAdmin: boolean;
  constructor(public api:ApiService, public router:Router) { }

  ngOnInit() {
   
  }

  logout(){
    console.log("estoy en logout");
    this.api.cerrarSesion();
    
    }

}
