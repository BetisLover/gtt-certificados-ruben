import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-vista-registro',
  templateUrl: './vista-registro.component.html',
  styleUrls: ['./vista-registro.component.scss']
})
export class VistaRegistroComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  error: any;
  valid: any;
  role= 0;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(){
    this.api.comprobarLogin();
    this.api.comprobarRolUsuario();
  }

  register(){
    const {username, password, email, role} = this;
    if(this.username.trim() !== '' && password.trim() && email.trim() !== ''){
      this.api.
      register(username.trim(), password.trim(), email.trim(), this.role)
      .then(res =>{
        console.log(res);
        
        this.valid = res;
      })
      .catch(error =>{
        console.log(error);

        this.error=error;
      })
    }
}


  

}
