import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdInputModule, MdSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    ReactiveFormsModule
  ],
  imports: []
})
export class SharedModule { }
