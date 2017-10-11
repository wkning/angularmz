import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpModule,Http} from '@angular/http';


import { AppComponent } from './app.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { HeadernavComponent } from './headernav/headernav.component';

import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AppService} from './app.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {AuthService } from './auth.service';
import {HttpService } from './http.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavComponent,
    HeadernavComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,RouterModule,RouterModule.forRoot(appRoutes),BrowserAnimationsModule,FormsModule,HttpModule
  ],
  providers: [AppService,AuthService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
