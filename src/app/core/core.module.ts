import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CoreComponent } from './core.component';
import { CommonModule } from "@angular/common";
import { AppStoreModule } from "app/app-store";

@NgModule({
  imports: [
    AppStoreModule,
    MdButtonModule,
    MdCardModule,
    NgxDatatableModule,
    CommonModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule { }
