import { createSelector } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { Inventory, InventoryState, Item, TownComponentId } from 'app/core/town';
import {
  createComponentSelectors, getSelectedTown,
  selectSelectedInventoryIds
} from 'app/core/town/shared/town.selector';
import { items } from './inventory.model';

const getInventoryState = (s: AppState) => s.inventory;

const getSelectedInventory = createComponentSelectors(createSelectedInventorySelector);

export const getItems = createComponentSelectors(createItemsSelector);

export const selectedInventories = createComponentSelectors(createInventoriesSelector);

export const getInventory = createComponentSelectors(createInventorySelector);

function createItemsSelector(componentId: TownComponentId) {
  return createSelector(getInventoryState, getSelectedInventory[componentId],
    (state, selectedInventoryId) => getItemValues(state, selectedInventoryId)
  );
}

function createInventoriesSelector(componentId: TownComponentId) {
  return createSelector(getInventoryState, selectSelectedInventoryIds[componentId],
    (state, inventoryIds) => inventoryIds.map((id) => state.inventories[id]));
}

function createSelectedInventorySelector(componentId: TownComponentId) {
  return createSelector(getInventoryState, (state) => state.selected[componentId]);
}

function createInventorySelector(componentId: TownComponentId) {
  return createSelector(getInventoryState, getSelectedInventory[componentId],
    (state, selectedInventoryId) => state.inventories[selectedInventoryId]);
}

const getItemValues = (s: InventoryState, inventoryId: string) => {
  const values = s.values[inventoryId];
  return items.map(({ name, id }) => ({ name, ...values[id] }));
};
