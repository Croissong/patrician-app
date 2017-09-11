import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { TownComponentId, towns, TownState } from 'app/core/town';
import { townComponentIds } from 'app/core/town/shared/town.reducer';

export const getTownState = (s: AppState) => s.town;

export const getInventoryState = (s: AppState) => s.inventory;

export const getTowns = createSelector(
  getTownState,
  (state) => Object.keys(state.inventories).map((id) => towns[id]));

export const getSelectedTown = createComponentSelectors(createSelectedTownSelector);

export const selectSelectedInventoryIds = createComponentSelectors(createInventoryIdsSelector);

function createSelectedTownSelector(componentId: TownComponentId) {
  return createSelector(getTownState, (t) => t.selected[componentId]);
}

function createInventoryIdsSelector(componentId: TownComponentId) {
  return createSelector(getTownState, getSelectedTown[componentId], getInventoryIds);
}

export function getInventoryIds(state: TownState, townId: string) {
  return state.inventories[townId];
}

export function createComponentSelectors<T>(
  selectorCreator: (componentId: TownComponentId) => MemoizedSelector<AppState, T>) {
  return townComponentIds.reduce(
    (selectors, componentId) => ({ ...selectors, [componentId]: selectorCreator(componentId) }),
    {} as {[component in TownComponentId]: MemoizedSelector<AppState, T> });
}
