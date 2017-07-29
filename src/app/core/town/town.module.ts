import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable/release';
import { SharedModule } from 'app/shared';
import { InventoryComponent, InventoryTableComponent } from './inventory';
import { TownHeaderComponent, TownSelectComponent } from './town-header';
import { TownComponent } from './town.component';

@NgModule({
  declarations: [
    TownComponent,
    TownHeaderComponent,
    InventoryComponent,
    InventoryTableComponent,
    TownSelectComponent
  ],
  exports: [
    TownComponent
  ],
  imports: [
    NgxDatatableModule,
    SharedModule
  ]
})
export class TownModule { }
