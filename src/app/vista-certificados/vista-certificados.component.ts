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
  deleteCert(certificado){
    certificado.marcar_borrado=!certificado.marcar_borrado;
  }

  //cargamos los certificados en bbdd cada vez que accedemos a la vista
  obtenerCertificados(){
    this.api.getCertificates().then((res:any)=>{
      this.certificateList=res;
    }).catch((err:any)=>{
      console.log(err);
    });
  }

  //descarga de certificado
  descargarCertificado(certificado:Certificate){
    let formatoCertificado= certificado.nombre_archivo.split('.')[1];
  }
}
