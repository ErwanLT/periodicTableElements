import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListElementComponent } from './list-element/list-element.component';
import { ElementComponent } from './element/element.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ElementInexistantComponent } from './element-inexistant/element-inexistant.component';

@NgModule({
  declarations: [
    AppComponent,
    ListElementComponent,
    ElementComponent,
    FooterComponent,
    HeaderComponent,
    ElementInexistantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
