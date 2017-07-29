import { NgModule } from '@angular/core';

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
    SharedModule,
    TownModule
  ]
})
export class CoreModule { }
