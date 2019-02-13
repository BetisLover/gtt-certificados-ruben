import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.scss']
})
export class VistaLoginComponent implements OnInit{
  username: string;
  password: string;
  role: string;
  error: any;
  valid: any;
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(){
    this.api.comprobarLogin();
    console.log(localStorage.getItem('rol'));
  }

  login() {
    const { username, password } = this;
    if (this.username.trim() !== '' && password.trim() !== '') {
      this.api.
        login(username.trim(), password.trim())
        .then((response:any) => {
          console.log(response);
        if(response.status===400){
          this.error= response.error;
          this.username='';
          this.password='';
        }else{
          this.router.navigate(['/certificados']);
        console.log("id a guardar: "+response.user_id);
        localStorage.setItem('id',response.user_id);
        localStorage.setItem('jwt', response.jwt);
        localStorage.setItem('rol',response.role.toString());
        console.log("rol de usuario: "+localStorage.getItem('rol'));
        }
        
        })
        .catch(error => {
          console.log('cach', error);

          this.error = error;
        });
        this.password='';
        this.username='';
    }
  }

}
