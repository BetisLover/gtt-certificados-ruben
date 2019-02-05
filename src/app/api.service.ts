import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models.interface';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})





export class ApiService {
  httpOptions = {

    headers: new HttpHeaders({

      'Access-Control-Allow-Origin': '*',

    })

  };
  public baseurl = 'https://localhost:44346';

  jwt: any;
  dataUser: any;

  //control del registro por el backend
  register(username, password, email) {
    const body = { username, password, email };
    console.log(body);
    return this.http.post('/api/users', body).toPromise();

  }
  //control del login por el back

  login(username, password) {
    const body = { username, password };
    return new Promise((resolve, reject) => {
      this.http.post('/api/auth', body)
        .toPromise().then(response => {
          console.log(response, 'status.200');
          this.dataUser = { ...response };
          let jwt = this.dataUser.password;
          this.jwt = jwt;

          console.log(this.dataUser.id, 'primer valor');
          localStorage.setItem('jwt', this.jwt);
          localStorage.setItem('id', this.dataUser.id);
          localStorage.setItem('userName', this.dataUser.username);
          // localStorage.setItem('role', this.dataUser.role);
          resolve(200);
          console.log('login correcto');
        }).catch(() => {
          reject('user/pass not found');
        });
    });
  }






  constructor(private http: HttpClient) { }
}
