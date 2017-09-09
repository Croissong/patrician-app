import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { SelectTownAction, TownComponentId } from './town.reducer';
import { getInventoryIds, getSelectedTown, getTowns, getTownState } from './town.selector';
import { InventoryService } from 'app/core/town/shared';
import last from 'lodash.last';

@Injectable()
export class TownService {
  constructor(private store: Store<AppState>, private inventoryService: InventoryService) {
  }

  public getTowns() {
    return this.store.select(getTowns);
  }

  public getSelectedTown(componentId: TownComponentId) {
    return this.store.select(getSelectedTown[componentId]);
  }

  public getInventoryIds(townId: string) {
    return this.store.select(getTownState).select((state) => getInventoryIds(state, townId));
  }

  public selectTown(component: TownComponentId, id: string) {
    this.selectLatestInventory(component, id);
    this.store.dispatch(new SelectTownAction(component, id));
  }

  private selectLatestInventory(componentId: TownComponentId, townId: string) {
    this.getInventoryIds(townId).take(1).subscribe(
      (inventoryIds) => {
        const latestInventory = last(inventoryIds);
        if (latestInventory) {
          this.inventoryService.selectInventory(componentId, latestInventory);
        }
      }
    );
  }
}
