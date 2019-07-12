import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegValComponent } from './reg-val/reg-val.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    RegValComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
