import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    NgxDatatableModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule { }
