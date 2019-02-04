import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { VistaLoginComponent } from './vista-login/vista-login.component';
import { VistaRegistroComponent } from './vista-registro/vista-registro.component';
import { BoardCertificadosComponent } from './board-certificados/board-certificados.component';
import { VistaCertificadosComponent } from './vista-certificados/vista-certificados.component';
import { VistaJiraComponent } from './vista-jira/vista-jira.component';
import { NavegacionUsuarioComponent } from './navegacion-usuario/navegacion-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    VistaLoginComponent,
    VistaRegistroComponent,
    BoardCertificadosComponent,
    VistaCertificadosComponent,
    VistaJiraComponent,
    NavegacionUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
