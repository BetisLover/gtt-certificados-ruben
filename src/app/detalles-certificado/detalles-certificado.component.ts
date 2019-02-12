import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Certificate } from '../models.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-certificado',
  templateUrl: './detalles-certificado.component.html',
  styleUrls: ['./detalles-certificado.component.scss']
})
export class DetallesCertificadoComponent implements OnInit {
  id: number;
  certificado: Certificate;
  constructor(public api: ApiService, private ruta: ActivatedRoute) { }
  //cargamos el certificado deseado
  ngOnInit() {
    this.id = Number(this.ruta.snapshot.paramMap.get('id'));
    console.log("estoy en el ts de detalles");
    console.log(this.id);
    this.api.getDetailsCertificate(this.id).then((res: Certificate) => {
      this.certificado = res;
    }).catch(err => {
      console.log(err);
    })
  }

}
