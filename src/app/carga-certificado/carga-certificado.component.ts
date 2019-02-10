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
  idorga;
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
      id_orga: this.idorga,
      nombre_cliente: this.idorga,
      integration_list: this.integrations,
      observaciones: this.observations,
      fichero_base_64: "",
      repositorio: this.repository,
      contacto_renovacion: this.contact,

    }

    var reader = new FileReader();
    var arrayBuffer;
    let api2 = this.api;

    reader.onload = function () {
      arrayBuffer = reader.result;
      var arrayBuffer2 = arrayBuffer.split(',');
      api2.addCertificate(arrayBuffer2[1], certificado).then(console.log).catch(console.error);

    };
    reader.readAsDataURL(event.target.files[0]);
  }
}







