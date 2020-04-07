import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {pipClassImp} from './courses/courses.pip';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    pipClassImp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
