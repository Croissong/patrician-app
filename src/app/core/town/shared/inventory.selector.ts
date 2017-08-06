import { createSelector } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { items } from './inventory.model';

const getTownState = (s: AppState) => s.town;
const getInventoryStates = (s: AppState) => s.inventory;

export const getItems = createSelector(
  getInventoryStates, getTownState,
  (i, t) => {
    const values = i[t.selected][0].items;
    return items.map(({ name, id }) => ({ name, ...values[id] }));
  }
);
