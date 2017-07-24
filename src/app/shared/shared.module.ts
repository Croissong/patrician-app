import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule, MdCardModule, MdSelectModule } from '@angular/material';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdSelectModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
