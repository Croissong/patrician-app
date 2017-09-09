import { createSelector } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { TownComponentId, towns, TownState } from 'app/core/town';

export const getTownState = (s: AppState) => s.town;

export const getInventoryState = (s: AppState) => s.inventory;

export const getTowns = createSelector(
  getTownState,
  (state) => Object.keys(state.inventories).map((id) => towns[id]));

export const getSelectedTown = {
  Town1: createSelectedTownSelector('Town1'),
  Town2: createSelectedTownSelector('Town2')
};

export const selectSelectedInventoryIds = {
  Town1: createInventoryIdsSelector('Town1'),
  Town2: createInventoryIdsSelector('Town2')
};

function createSelectedTownSelector(componentId: TownComponentId) {
  return createSelector(getTownState, (t) => t.selected[componentId]);
}

function createInventoryIdsSelector(componentId: TownComponentId) {
  return createSelector(getTownState, getSelectedTown[componentId], getInventoryIds);
}

export function getInventoryIds(state: TownState, townId: string) {
  return state.inventories[townId];
}
