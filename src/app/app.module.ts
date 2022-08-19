import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { TopNavComponent } from './application/top-nav/top-nav.component';
import { LeftNavComponent } from './application/left-nav/left-nav.component';
import { RightContentComponent } from './application/right-content/right-content.component';
import { CalendarComponent } from './application/right-content/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { EventsComponent } from './application/left-nav/events/events.component';
import { AuthentificationService } from './authentification/authentification.service';
import { LoginService } from './authentification/login/login.service';
import { SignupService } from './authentification/sign-up/sign-up.service';
import { JsonServerService } from './json-server-service/json-server.service';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationComponent } from './application/application.component';
import { CalendarService } from './application/right-content/calendar/calendar.service';

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
    EventsComponent,
    ApplicationComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
      BrowserAnimationsModule

  ],

  providers: [AuthentificationService, LoginService, SignupService, JsonServerService, CalendarService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
