import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User, UserJira } from '../models.interface';

@Component({
  selector: 'app-vista-jira',
  templateUrl: './vista-jira.component.html',
  styleUrls: ['./vista-jira.component.scss']
})
export class VistaJiraComponent implements OnInit {
  idJira: any;
  username;
  password;
  url;
  project;
  component;
  user_id;
  issue;
  userJira: UserJira;
  userJira2: UserJira;
  editar;
  role:string;

  editarOGuardar() {
    if (this.editar != true) {
      console.log("entro al put");
      this.editarUser();
    } else {
      console.log("entro al post");
      this.guardarUser();
      
    }
  }


  constructor(private api: ApiService) { }
  //metodo que guarda el user si no hay
  guardarUser() {
    if(this.username.equals('') || this.password.equals('')){
      alert('error, hay campos sin rellenar');
    }else{
      this.userJira = {
        
        user_id: parseInt(localStorage.getItem('id')),
        id: parseInt(localStorage.getItem('id')),
        username: this.username,
        password: this.password,
        url: this.url,
        project: "SIT",
        issue: "Explotacion",
        component: "Arquitectura"
    
      }
      console.log("estoy en el (post) ");
      console.log(this.userJira);
      this.api.addJiraUser(this.userJira)
      .then((res:any)=>{
        console.log(res);
        this.editar = true;
      }).catch(err=>{
        console.log("estoy en el catch ");
        console.log(err);
      })
    }

  }
  //metodo que edita el user de jira
  editarUser() {
    //montamos el user de jira
    this.userJira = {
      username: this.username,
      password: this.password,
      url: this.url,
      project: this.project,
      component: this.component,
      issue: this.issue,
      id: parseInt(localStorage.getItem('id')),
      user_id: parseInt(localStorage.getItem('id'))
    }
    console.log("user a subir a la bbdd (put) " + this.userJira);
    this.editar=true;
    //llamamos a la api para subir al back
    this.api.editJiraUser(this.userJira).then((res: any) => {
      console.log("llamando a la api " + res);
    })


  }

  obtenerInfoUserLoggeado(){
    this.api.getUserLoggedInfo(localStorage.getItem('id')).then((res:any)=>{
      this.username =res.username;
      this.role= res.role;
    }).catch(error =>{
      console.log(error)
    })
  }

  ngOnInit() {
    
    this.api.comprobarLogin();
    this.obtenerInfoUserLoggeado();
    console.log(parseInt(localStorage.getItem('id')));

    this.api.getUserJiraData().then((res: any) => {
      if (res !== null) {
        this.username = res.username;
        this.password = res.password;
        this.url = res.url;
        this.project = res.project;
        this.component = res.component;

        //cambiamos la bandera para que sepa que hay que editar
        this.editar = true;
        console.log("id jira a guardar: " + res.id);
        localStorage.setItem('idJira', res.id);
      }

    });




  }

}
