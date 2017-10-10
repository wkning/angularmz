import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { HeadernavComponent } from './headernav/headernav.component';

import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AppService} from './app.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavComponent,
    HeadernavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule,RouterModule.forRoot(appRoutes),BrowserAnimationsModule,FormsModule
  ],
  providers: [AppService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
