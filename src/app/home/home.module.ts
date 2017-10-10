import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FilmitemComponent } from './filmitem/filmitem.component';

import {RouterModule} from '@angular/router';
import {homeRoutes} from './home.routes';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent, FilmitemComponent]
})
export class HomeModule { }
