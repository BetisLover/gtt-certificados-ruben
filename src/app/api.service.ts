import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserJira, Certificate } from './models.interface';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  public baseurl = 'https://localhost:44346';

  jwt: any;
  dataUser: any;
  options = { headers: { Authorization: `${this.jwt}` } };

  //control del registro por el backend
  register(username, password, email, role) {
    const body = { username, password, email, role };
    console.log(body);
    return this.http.post('/api/users', body).toPromise();

  }
  //control del login por el back

  login(username, password) {
    const body = { username, password };
    console.log("user a loguear "+body.username+" pass:"+body.password);
    return this.http.post('/api/auth', body)
      .toPromise();
  }
  //cargar user de jira loggeado
  getUserJiraData() {
    return this.http.get('/api/jira/'+ localStorage.getItem('id'),this.options).toPromise();
  }
  //obtener la id del user loggeado
  getUserLoggedInfo(iduser) {
    return this.http.get('/api/users/'+iduser).toPromise();
  }

  //obtiene la id del jira del usuario loggeado
  getJiraIDLoggedUser() {
    return localStorage.getItem('idJira');
  }
  //guardar user editado de jira en el back 
  editJiraUser(userJira: UserJira){
    return this.http.put('/api/jira/'+localStorage.getItem('idJira'),userJira).toPromise();
  }
  //crear user de jira en el back
  addJiraUser(userjira: UserJira){
    return this.http.post('/api/jira/',userjira, this.options).toPromise();
  }

  //cargar certificado en back
  addCertificate(cert: Certificate, ficheroBase64: any)
  {
    console.log('Estoy en apiservice');
    //cert.fichero_base_64 = ficheroBase64;
    console.log(cert);
    return this.http.post('/api/certificates/',cert).toPromise();
  }

  //recibir los certificados para mostrarlos en el board
  getCertificates(){
    return this.http.get('/api/certificates/').toPromise();
  }
 //recibir los datos de bbdd para mostrar certificado en detalle
  getDetailsCertificate(id: number){
    return this.http.get('/api/certificates/'+id,this.options).toPromise();
  }

  //comprobamos si el usuario tiene permisos, y en caso contrario lo redireccionamos a la vista principal
  comprobarRolUsuario(){
    if(localStorage.getItem('rol')==="1"){
      alert('permiso denegado');
      this.router.navigate(['/certificados']);
    }
  }
  
  //comprobamos mediante el jsonWebToken si el usuario está logueado y si no le devolvemos al login
  comprobarLogin(){
    if(!localStorage.getItem('jwt')||localStorage.getItem('jwt')==='-1'){
      alert('permiso denegado');
      this.router.navigate(['/login']);
    }
  }

  //eliminamos todas las variables de localstorage al cerrar sesión
  cerrarSesion(){
    this.jwt="-1";
    localStorage.clear();
    console.log("borrando"+localStorage.getItem('jwt'));
    
  }

  constructor(private http: HttpClient, private router: Router) { }
}
