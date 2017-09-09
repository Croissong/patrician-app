import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { SelectTownAction, TownComponentId } from './town.reducer';
import { getSelectedTown, getTowns, getTownState, getInventoryIds } from './town.selector';

@Injectable()
export class TownService {
  constructor(private store: Store<AppState>) {
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
    return this.store.dispatch(new SelectTownAction(component, id));
  }
}
