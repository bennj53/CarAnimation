import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from "./app.routes";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShaperComponent } from './shaper/shaper.component';
import { CarComponent } from './car/car.component';
import { HeadlightComponent } from './headlight/headlight.component';
import { HeadlightsComponent } from './headlights/headlights.component';
import { MountainsComponent } from './mountains/mountains.component';
import { FloorComponent } from './floor/floor.component';
import { SunComponent } from './sun/sun.component';
import { PalmComponent } from './palm/palm.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    ShaperComponent,
    CarComponent,
    HeadlightComponent,
    HeadlightsComponent,
    MountainsComponent,
    FloorComponent,
    SunComponent,
    PalmComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
