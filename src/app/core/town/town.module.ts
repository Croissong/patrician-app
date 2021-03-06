import { NgModule } from '@angular/core';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable/release';
import { SharedModule } from 'app/shared';
import { InventoryComponent, InventoryTableComponent } from './inventory';
import { InventoryService, TownService } from './shared';
import { TownHeaderModule } from './town-header';
import { TownComponent } from './town.component';

@NgModule({
  declarations: [
    TownComponent,
    InventoryComponent,
    InventoryTableComponent
  ],
  exports: [
    TownComponent
  ],
  imports: [
    TownHeaderModule,
    MdDatepickerModule,
    MdNativeDateModule,
    NgxDatatableModule,
    SharedModule
  ],
  providers: [
    InventoryService, TownService
  ]
})
export class TownModule { }
