import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import {RouterModule} from '@angular/router';
import {filmRoutes} from './film.routes';
@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(filmRoutes)
  ],
  declarations: [FilmComponent, ComingSoonComponent, NowplayingComponent]
})
export class FilmModule { }
