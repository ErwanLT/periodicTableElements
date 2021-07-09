import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementComponent} from './element/element.component';
import {ListElementComponent} from './list-element/list-element.component';

const routes: Routes = [
  { path: 'element/:elementNumber', component:  ElementComponent},
  { path: '', component: ListElementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
