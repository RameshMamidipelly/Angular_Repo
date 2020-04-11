import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {pipClassImp} from './courses/courses.pip';
import { RamComponent } from './ram/ram.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    pipClassImp,
    RamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
