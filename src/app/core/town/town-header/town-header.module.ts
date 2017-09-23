import { NgModule } from '@angular/core';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { SharedModule } from 'app/shared';
import { TownDateSelectComponent } from './date-select';
import { TownHeaderComponent } from './town-header.component';
import { TownSelectComponent } from './town-select';
import { TownGoldComponent } from './town-gold';

@NgModule({
  declarations: [
    TownHeaderComponent,
    TownDateSelectComponent,
    TownSelectComponent,
    TownGoldComponent
  ],
  exports: [
    TownHeaderComponent
  ],
  imports: [
    MdDatepickerModule,
    MdNativeDateModule,
    SharedModule
  ]
})
export class TownHeaderModule { }
