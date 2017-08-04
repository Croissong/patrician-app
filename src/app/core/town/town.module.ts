import { NgModule } from '@angular/core';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable/release';
import { SharedModule } from 'app/shared';
import { InventoryComponent, InventoryTableComponent } from './inventory';
import { TownDateSelectComponent, TownHeaderComponent, TownSelectComponent } from './town-header';
import { TownComponent } from './town.component';

@NgModule({
  declarations: [
    TownComponent,
    TownHeaderComponent,
    InventoryComponent,
    InventoryTableComponent,
    TownDateSelectComponent,
    TownSelectComponent
  ],
  exports: [
    TownComponent
  ],
  imports: [
    MdDatepickerModule,
    MdNativeDateModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class TownModule { }
