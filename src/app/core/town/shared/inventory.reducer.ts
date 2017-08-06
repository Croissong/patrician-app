import { ActionHandlers, createReducer } from 'app/app-store';
import { Inventory } from './inventory.model';

export interface InventoryState {
  [key: string]: Inventory[];
}

const inventoryHandlers: ActionHandlers<InventoryState> = {};

export const createInventoryReducer = () => createReducer(inventoryHandlers);
