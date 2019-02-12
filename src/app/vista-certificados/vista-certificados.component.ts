import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Certificate } from '../models.interface';

@Component({
  selector: 'app-vista-certificados',
  templateUrl: './vista-certificados.component.html',
  styleUrls: ['./vista-certificados.component.scss']
})
export class VistaCertificadosComponent implements OnInit {
  certificateList:Array<Certificate>;

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
    var contentType = "file/"+formatoCertificado;
     var byteCharacters = atob(certificado.ficheroBase64);
     var byteNumbers = new Array(byteCharacters.length);

     for (var i = 0; i < byteCharacters.length; i++) {
       byteNumbers[i] = byteCharacters.charCodeAt(i);
     }
     var byteArray = new Uint8Array(byteNumbers);
     var blob = new Blob([byteArray], {
       type: contentType
     });
     var aux_document = document.createElement("a");
     aux_document.href = URL.createObjectURL(blob);
     aux_document.download = `${certificado.nombre_archivo}`;
     document.body.appendChild(aux_document);
     aux_document.click()

  }

  //metodos de ordenación de certificados
  ordenarPorAlias(){
    this.certificateList.sort((a,b)=>{
      if(a.alias >b.alias){
        return 1;
      } 
      else if(a.alias === b.alias){
        return 0;
      }else{
        return -1;
      }
      
    })
  }
}
