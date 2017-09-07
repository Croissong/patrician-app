import { createSelector } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { TownComponentId, towns, TownState } from 'app/core/town';

const getTownState = (s: AppState) => s.town;

export const getInventoryState = (s: AppState) => s.inventory;

export const getTowns = createSelector(
  getInventoryState,
  (i) => Object.keys(i).map((id) => towns[id]));

export const getSelectedTown = {
  Town1: createSelectedTownSelector('Town1'),
  Town2: createSelectedTownSelector('Town2')
};

function createSelectedTownSelector(componentId: TownComponentId) {
  return createSelector(getTownState, (t) => t.selected[componentId]);
}
