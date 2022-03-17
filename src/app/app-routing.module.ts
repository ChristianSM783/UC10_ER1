import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { FormComponent } from './views/form/form.component';
import { HomeComponent } from './views/home/home.component';
import { Pag1Component } from './views/pag1/pag1.component';
import { Pag2Component } from './views/pag2/pag2.component';
import { Pag3Component } from './views/pag3/pag3.component';
import { Pag4Component } from './views/pag4/pag4.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "pag1", component: Pag1Component },
  { path: "pag2", component: Pag2Component },
  { path: "pag3", component: Pag3Component },
  { path: "pag4", component: Pag4Component },
  { path: "form", component: FormComponent},
  { path: "contato", component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
