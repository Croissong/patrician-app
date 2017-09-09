import { createSelector } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { Inventory, InventoryState, Item, TownComponentId } from 'app/core/town';
import { selectSelectedInventoryIds, getSelectedTown } from 'app/core/town/shared/town.selector';
import { items } from './inventory.model';

const getInventoryState = (s: AppState) => s.inventory;

const getSelectedInventory = {
  Town1: createSelectedInventorySelector('Town1'),
  Town2: createSelectedInventorySelector('Town2')
};

export const getItems = {
  Town1: createItemsSelector('Town1'),
  Town2: createItemsSelector('Town2')
};

export const selectedInventories = {
  Town1: createInventoriesSelector('Town1'),
  Town2: createInventoriesSelector('Town2')
};

export const getInventory = {
  Town1: createInventorySelector('Town1'),
  Town2: createInventorySelector('Town2')
};

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
