import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingPageComponent } from './rating-page/rating-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThanksComponent } from './thanks/thanks.component';


@NgModule({
  declarations: [
    AppComponent,
    RatingPageComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
