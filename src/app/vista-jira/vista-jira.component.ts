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


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.idJira = this.api.getIdLoggedUser();

    this.api.getUserJiraData().then((res: any) => {
      if (res !== null) {
        this.username = res.username;
        this.password = res.password;
        this.url = res.url;
        this.project = res.project;
        this.component = res.component;
      }

    });




  }

}
