import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightContentComponent } from './right-content/right-content.component';
import { CalendarComponent } from './right-content/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { EventsComponent } from './left-nav/events/events.component';
import { AuthentificationService } from './authentification/authentification.service';
import { DatabaseService } from './quote-DataBase-quote/qDATABASEq.service';
import { LoginService } from './authentification/login/login.service';
import { SignupService } from './authentification/sign-up/sign-up.service';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LeftNavComponent,
    RightContentComponent,
    CalendarComponent,
    AuthentificationComponent,
    LoginComponent,
    SignUpComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })

  ],
  providers: [DatabaseService, AuthentificationService, LoginService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
