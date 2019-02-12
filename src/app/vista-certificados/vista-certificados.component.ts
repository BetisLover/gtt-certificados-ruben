import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Certificate } from '../models.interface';

@Component({
  selector: 'app-vista-certificados',
  templateUrl: './vista-certificados.component.html',
  styleUrls: ['./vista-certificados.component.scss']
})
export class VistaCertificadosComponent implements OnInit {
  certificateList;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.obtenerCertificados();
  }

  obtenerCertificados(){
    this.api.getCertificates().then((res:any)=>{
      this.certificateList=res;
    }).catch((err:any)=>{
      console.log(err);
    });
  }
}
