import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShaperComponent } from './shaper/shaper.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    ShaperComponent,
    CarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
