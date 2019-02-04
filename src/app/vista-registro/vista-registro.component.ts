import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-registro',
  templateUrl: './vista-registro.component.html',
  styleUrls: ['./vista-registro.component.scss']
})
export class VistaRegistroComponent  {
  username: string;
  password: string;
  error: any;
  valid: any;
  constructor(private router: Router) { }

  /*register(){
    const {username, password} = this;
    if(this.username.trim() !== '' && password.trim() !== ''){
      this.api.
      register(username.trim(), password.trim())
      .then(res =>{
        this.valid = res;
      })
      .catch(error =>{
        this.error=error;
      })
    }
}*/


  

}
