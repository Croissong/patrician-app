import { createSelector } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { Inventory, Item, TownComponentId, InventoryState } from 'app/core/town';
import { getSelectedTown } from 'app/core/town/shared/town.selector';
import { items } from './inventory.model';

const getTownState = (s: AppState) => s.town;
const getInventoryStates = (s: AppState) => s.inventory;

export const getItems = {
  Town1: createItemsSelector('Town1'),
  Town2: createItemsSelector('Town2')
};

function createItemsSelector(componentId: TownComponentId) {
  return createSelector(
    getInventoryStates, getSelectedTown[componentId],
    (i, t) => getItemValues(i, t)
  );
}

const getItemValues = (inventoryState: InventoryState, town: string) => {
  const inventory = inventoryState.inventories[town][0];
  const values = inventoryState.values[inventory.id];
  return items.map(({ name, id }) => ({ name, ...values[id] }));
};
