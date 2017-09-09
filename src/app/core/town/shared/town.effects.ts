import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import last from 'lodash.last';

import { SELECT_TOWN, SelectTownAction, TownComponentId } from './town.reducer';
import { TownService, InventoryService } from 'app/core/town/shared';

@Injectable()
export class TownEffects {
  @Effect({ dispatch: false }) private selectLatestInventory$ = this.actions$.ofType<SelectTownAction>(SELECT_TOWN)
    .do((action) => this.selectLatestInventory(action.component, action.id));

  constructor(private actions$: Actions, private inventoryService: InventoryService,
    private townService: TownService) { }

  private selectLatestInventory(componentId: TownComponentId, townId: string) {
    this.townService.getInventoryIds(townId).take(1).subscribe(
      (inventoryIds) => {
        const latestInventory = last(inventoryIds);
        if (latestInventory) {
          this.inventoryService.selectInventory(componentId, latestInventory);
        }
      }
    );
  }
}
