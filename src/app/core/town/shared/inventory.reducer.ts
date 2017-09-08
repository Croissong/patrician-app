import { Action } from '@ngrx/store';
import { TownComponentId } from 'app/core/town';
import { set, setAppend } from 'monolite';
import { Inventory, InventoryValues } from './inventory.model';

export interface InventoryState {
  selected: {[component in TownComponentId]: string };
  inventories: { [id: string]: Inventory };
  values: { [id: string]: InventoryValues };
}

type Actions = AddInventoryAction | SelectInventoryAction;

const ADD_INVENTORY = 'ADD_INVENTORY_DATE';
const SELECT_INVENTORY = 'SELECT_INVENTORY_DATE';

export class AddInventoryAction implements Action {
  public readonly type = ADD_INVENTORY;
  constructor(public townId: string, public inventory: Inventory) { }
}

export class SelectInventoryAction implements Action {
  public readonly type = SELECT_INVENTORY;
  constructor(public component: TownComponentId, public inventoryId: string) { }
}

export function inventoryReducer(s: InventoryState, action: Actions): InventoryState {
  switch (action.type) {
    case ADD_INVENTORY: return addInventory(s, action.townId, action.inventory);
    case SELECT_INVENTORY: return selectInventory(s, action.component, action.inventoryId);
    default: return s;
  }
}

function addInventory(s: InventoryState, townId: string, inventory: Inventory) {
  return set(s, (_) => _.inventories[inventory.id])(inventory);
}

function selectInventory(s: InventoryState, component: TownComponentId, inventoryId: string) {
  return set(s, (_) => _.selected[component])(inventoryId);
}
