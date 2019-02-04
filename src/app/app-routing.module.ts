import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaRegistroComponent } from './vista-registro/vista-registro.component';
import { VistaLoginComponent } from './vista-login/vista-login.component'
import { BoardCertificadosComponent} from './board-certificados/board-certificados.component';

const routes: Routes = [
  {
    path:'login',
    component: VistaLoginComponent
  },
  {
    path:'register',
    component: VistaRegistroComponent,
  },
  {
    path:'board',
    component: BoardCertificadosComponent,
  },
  { path:'**', redirectTo:'login',pathMatch:'full',},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
