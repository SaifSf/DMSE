import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SfsComponent } from './sfs/sfs.component';
import { Sfscomp2Component } from './sfscomp2.component';


@NgModule({
  declarations: [
    AppComponent,
    SfsComponent,
    Sfscomp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
