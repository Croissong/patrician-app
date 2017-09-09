import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { InventoryService, TownService } from 'app/core/town/shared';
import { SELECT_TOWN, SelectTownAction, TownComponentId } from './town.reducer';

@Injectable()
export class TownEffects {

  constructor(private actions$: Actions) { }

}
