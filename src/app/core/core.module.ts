import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CoreComponent } from './core.component';
import { AppStoreModule } from "app/app-store";
import { SharedModule } from "app/shared";
import { TownModule } from "app/core/town";

@NgModule({
  imports: [
    AppStoreModule,
    NgxDatatableModule,
    SharedModule,
    TownModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule { }
