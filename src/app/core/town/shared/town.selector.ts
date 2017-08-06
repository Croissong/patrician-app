import { createSelector } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { towns } from 'app/core/town';

const getTownState = (s: AppState) => s.town;

export const getInventoryState = (s: AppState) => s.inventory;

export const getTowns = createSelector(
  getInventoryState,
  (i) => Object.keys(i).map((id) => towns[id]));

export const getSelectedTown = createSelector(
  getTownState, (t) => t.selected);
