import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FactionCreationComponent } from './faction-creation/faction-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    FactionCreationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
