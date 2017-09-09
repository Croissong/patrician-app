import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { AppStoreModule } from 'app/app-store';
import { TownModule } from 'app/core/town';
import { TownEffects } from 'app/core/town/shared/town.effects';
import { SharedModule } from 'app/shared';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    AppStoreModule,
    EffectsModule.forRoot([TownEffects]),
    SharedModule,
    TownModule
  ]
})
export class CoreModule { }
