import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaRegistroComponent } from './vista-registro/vista-registro.component';
import { VistaLoginComponent } from './vista-login/vista-login.component'
import { VistaCertificadosComponent} from './vista-certificados/vista-certificados.component';
import { VistaJiraComponent} from './vista-jira/vista-jira.component';

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
    path:'certificados',
    component: VistaCertificadosComponent,
  },
{
 path:'jira',
 component: VistaJiraComponent,
},

  { path:'**', redirectTo:'login',pathMatch:'full',},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
