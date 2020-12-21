import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShaperComponent } from './shaper/shaper.component';
import { CarComponent } from './car/car.component';
import { HeadlightComponent } from './headlight/headlight.component';
import { HeadlightsComponent } from './headlights/headlights.component';
import { MountainsComponent } from './mountains/mountains.component';
import { FloorComponent } from './floor/floor.component';
import { SunComponent } from './sun/sun.component';

@NgModule({
  declarations: [
    AppComponent,
    ShaperComponent,
    CarComponent,
    HeadlightComponent,
    HeadlightsComponent,
    MountainsComponent,
    FloorComponent,
    SunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
