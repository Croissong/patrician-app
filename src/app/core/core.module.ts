import { NgModule } from '@angular/core';

import { AppStoreModule } from 'app/app-store';
import { TownModule } from 'app/core/town';
import { SharedModule } from 'app/shared';
import { CoreComponent } from './core.component';
import { EffectsModule } from '@ngrx/effects';
import { TownEffects } from 'app/core/town/shared/town.effects';

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
