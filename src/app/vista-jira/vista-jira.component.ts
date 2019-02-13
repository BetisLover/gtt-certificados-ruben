import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User, UserJira } from '../models.interface';

@Component({
  selector: 'app-vista-jira',
  templateUrl: './vista-jira.component.html',
  styleUrls: ['./vista-jira.component.scss']
})
export class VistaJiraComponent implements OnInit {
  
  jira: any;
  JiraAccount; //booleano que controla el put y el post
  username: string;
  role: string;
  usernameJira;
  password;
  project = "SIT";
  component = "arquitectura";
  issue = "explotacion";
  url;


  constructor(private api: ApiService) { }
  //obtenemos informacion del user asociado a la cuenta de jira que podemos tener o no.
  getUserInfo() {
    this.api.getUserLoggedInfo(localStorage.getItem('id'))
      .then((result: any) => {
        this.username = result.username;
        this.role = result.role;
      }).catch(error => {
        console.log(error);
      })
  }
  //en función de la info recibida decidimos si llamar a la funcion que gestiona el post o el put
  saveOrEdit() {
    if (this.JiraAccount === true) {
      this.putUserJira();
    } else {
      this.postUserJira();
    }
  }

  //función que gestiona el post
  postUserJira() {
    if(this.username !=='' && this.password!=''){
      this.jira={
        id : localStorage.getItem('id'),
        username: this.usernameJira,
        password: this.password,
        project: this.project,
        component: this.component,
        url: this.url,
        user_id: localStorage.getItem('id')
      }
      console.log(this.jira);
      this.api.addJiraUser(this.jira).then((res:any)=>{
        this.JiraAccount=true;
      }).catch(err=>{
        console.log('estoy en el catch del post');
        console.log(err);
      })
    }
    else{
      alert('error al añadir user de jira');
    }
  }

  //función que gestiona el put
  putUserJira() {
    if (this.username.trim() !== '' && this.password.trim() != '') {
      this.jira = {
        id : localStorage.getItem('id'),
        username: this.usernameJira,
        password: this.password,
        project: this.project,
        component: this.component,
        url: this.url,
        user_id: localStorage.getItem('id')
      }
      //console.log(this.jira);
      this.api.editJiraUser(this.jira).then((res: any) => {
        this.JiraAccount = true;
        alert('User de Jira editado con éxito!');
      }).catch(err => {
        console.log(err);
      })
    }
    else {
      alert('Faltan campos por rellenar.');
    }
  }

//nada mas cargarse la página comprobamos si el user tiene cuenta en jira para recuperar y cargar los datos.
  ngOnInit() {
    this.api.comprobarLogin();
    this.getUserInfo();

    this.api.getUserJiraData().then((res:any)=>{
      if(res!==null){
        this.JiraAccount=true;
        this.usernameJira=res.username;
        this.password  = res.password;
        this.project =res.project;
        this.component = res.component;
        this.url = res.url;
        this.issue = res.issue;
      }
    })

  }

}
