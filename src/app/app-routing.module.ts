import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementComponent} from './element/element.component';
import {ListElementComponent} from './list-element/list-element.component';
import {ElementInexistantComponent} from './element-inexistant/element-inexistant.component';

const routes: Routes = [
  { path: 'element/:elementNumber', component:  ElementComponent},
  { path: 'elementNotFound', component: ElementInexistantComponent},
  { path: '', component: ListElementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
