import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.scss']
})
export class VistaLoginComponent {
  username: string;
  password: string;
  error: any;
  valid: any;
  constructor(private api: ApiService, private router: Router) { }

  login() {
    const { username, password } = this;
    if (this.username.trim() !== '' && password.trim() !== '') {
      this.api.
        login(username.trim(), password.trim())
        .then((response:any) => {
          console.log(response);
        if(response.status===400){
          this.error= response.error;
        }else{
          this.router.navigate(['/jira']);
        }
        localStorage.setItem('id',response.id);
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
