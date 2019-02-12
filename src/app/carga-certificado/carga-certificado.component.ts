import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Certificate } from '../models.interface';

@Component({
  selector: 'app-carga-certificado',
  templateUrl: './carga-certificado.component.html',
  styleUrls: ['./carga-certificado.component.scss']
})
export class CargaCertificadoComponent implements OnInit {
  alias;
  password;
  idOrga;
  repository;
  integrations;
  observations;
  contact;
  constructor(private api: ApiService) { }
  ngOnInit() {
  }

  //pillamos los datos del html
  obtainCert(event) {
    let certificado: Certificate = {
      id: undefined,
      alias: this.alias,
      entidad_emisora: "",
      numero_de_serie: "",
      subject: "",
      caducidad: new Date(),
      password: this.password,
      id_orga: this.idOrga,
      nombre_cliente: this.idOrga,
      integration_list: this.integrations,
      observaciones: this.observations,
      ficheroBase64:"",
      repositorio: this.repository,
      contacto_renovacion: this.contact,
      marcar_borrado: false,
      nombre_archivo: event.target.value.split("\\")[2]

    }

    var reader = new FileReader();
    var arrayBuffer;
    let api2 = this.api;

    reader.onload = function () {
      arrayBuffer = reader.result;
      //console.log(arrayBuffer);
      var arrayBuffer2 = arrayBuffer.split(',')[1];
      //console.log(certificado);
      certificado.ficheroBase64 = arrayBuffer2;
      console.log(certificado);
      //console.log(arrayBuffer2);
      api2.addCertificate(certificado, arrayBuffer2)
      .then(console.log).catch(console.error);

    };
    reader.readAsDataURL(event.target.files[0]);
  }
}







