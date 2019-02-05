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
        .then(() => {
          // console.log('then',res);
          this.error = undefined;
          this.router.navigate(['/jira']);
          // this.valid = res;
        })
        .catch(error => {
          console.log('cach', error);

          this.error = error;
        });
    }
  }

}
