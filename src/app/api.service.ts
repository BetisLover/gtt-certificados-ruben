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
  
      'Access-Control-Allow-Origin':'*',
  
      })
  
  };
  public baseurl = 'https://localhost:44346';


  register(username, password, email) {
    const body = { username, password, email };
    console.log(body);
    return this.http.post('/api/users', body).toPromise();
 
  }

  userAPI(body): any {
    return this.http.post(this.baseurl, body, this.httpOptions).toPromise();
  }





  constructor(private http: HttpClient) { }
}
