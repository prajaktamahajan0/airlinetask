import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerListComponent } from './shared/component/passenger-list/passenger-list.component';
import { TotalCheckedInComponent } from './shared/component/total-checked-in/total-checked-in.component';
import { AirLinePassDashboardComponent } from './shared/component/air-line-pass/air-line-pass-component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerListComponent,
    TotalCheckedInComponent,
    AirLinePassDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
