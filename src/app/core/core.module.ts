import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppStoreModule } from 'app/app-store';
import { TownModule } from 'app/core/town';
import { SharedModule } from 'app/shared';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    AppStoreModule,
    NgxDatatableModule,
    SharedModule,
    TownModule
  ]
})
export class CoreModule { }
