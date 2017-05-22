import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    MdCardModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule { }
