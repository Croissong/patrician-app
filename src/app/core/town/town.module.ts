import { NgModule } from '@angular/core';

import { TownHeaderComponent, TownSelectComponent } from "./town-header";
import { SharedModule } from "app/shared";
import { TownComponent } from "./town.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TownComponent,
    TownHeaderComponent,
    TownSelectComponent
  ],
  exports: [
    TownComponent
  ]
})
export class TownModule { }
