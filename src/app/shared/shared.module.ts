import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class SharedModule { }
