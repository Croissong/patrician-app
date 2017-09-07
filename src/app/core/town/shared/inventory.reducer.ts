import { Inventory, InventoryValues } from './inventory.model';
import { Action } from '@ngrx/store';
import { setAppend } from 'monolite';

export interface InventoryState {
  inventories: { [townId: string]: Inventory[] };
  values: { [id: string]: InventoryValues };
}

type Actions = AddInventoryAction;

const ADD_INVENTORY = 'ADD_INVENTORY_DATE';

export class AddInventoryAction implements Action {
  public readonly type = ADD_INVENTORY;
  constructor(public townId: string, public inventory: Inventory) { }
}

export function inventoryReducer(s: InventoryState, action: Actions): InventoryState {
  switch (action.type) {
    case ADD_INVENTORY: return addInventory(s, action.townId, action.inventory);
    default: return s;
  }
}

function addInventory(s: InventoryState, townId: string, inventory: Inventory) {
  return setAppend(s, (_) => _.inventories[townId])(inventory);
}
