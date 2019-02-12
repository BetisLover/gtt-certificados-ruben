import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { VistaLoginComponent } from './vista-login/vista-login.component';
import { VistaRegistroComponent } from './vista-registro/vista-registro.component';
import { HttpClientModule } from '@angular/common/http';
import { VistaCertificadosComponent } from './vista-certificados/vista-certificados.component';
import { VistaJiraComponent } from './vista-jira/vista-jira.component';
import { NavegacionUsuarioComponent } from './navegacion-usuario/navegacion-usuario.component';
import { ApiService } from './api.service';
import { CargaCertificadoComponent } from './carga-certificado/carga-certificado.component';
import { DetallesCertificadoComponent } from './detalles-certificado/detalles-certificado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    VistaLoginComponent,
    VistaRegistroComponent,
  
    VistaCertificadosComponent,
    VistaJiraComponent,
    NavegacionUsuarioComponent,
    CargaCertificadoComponent,
    DetallesCertificadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
