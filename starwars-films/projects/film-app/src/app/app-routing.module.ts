import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPageComponent } from './containers/films-page/films-page.component';
import { ListObjetsComponent } from './features/objetstrouves/list-objets/list-objets.component';

const routes: Routes = [
 {
    path: 'objetstrouves/:id',
    component: ListObjetsComponent
 },
 {
    path: 'films',
    component: FilmsPageComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
