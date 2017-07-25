import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdSelectModule,
    ReactiveFormsModule
  ],
  imports: []
})
export class SharedModule { }
