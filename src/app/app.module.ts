import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightContentComponent } from './right-content/right-content.component';
import { CalendarComponent } from './right-content/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LeftNavComponent,
    RightContentComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
