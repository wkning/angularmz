import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { HeadernavComponent } from './headernav/headernav.component';

import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AppService} from './app.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavComponent,
    HeadernavComponent
  ],
  imports: [
    BrowserModule,RouterModule,RouterModule.forRoot(appRoutes),BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
