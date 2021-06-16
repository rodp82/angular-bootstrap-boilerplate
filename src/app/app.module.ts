import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ModOneModule } from './mod-one/mod-one.module';
import { ModTwoModule } from './mod-two/mod-two.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModOneModule,
    ModTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
