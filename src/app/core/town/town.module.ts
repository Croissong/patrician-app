import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';
import { TownHeaderComponent, TownSelectComponent } from './town-header';
import { TownComponent } from './town.component';

@NgModule({
  declarations: [
    TownComponent,
    TownHeaderComponent,
    TownSelectComponent
  ],
  exports: [
    TownComponent
  ],
  imports: [
    SharedModule
  ]
})
export class TownModule { }
