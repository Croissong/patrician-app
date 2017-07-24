import { createSelector } from "@ngrx/store";
import { towns } from "app/core/town";
import { AppState } from "app/app-store";

const getTownState = (s: AppState) => s.town;


export const getInventoryState = (s: AppState) => s.inventory;

export const getTowns = createSelector(
  getInventoryState,
  (i) => Object.keys(i).map((id) => towns[id]));

export const getSelectedTown = createSelector(
  getTownState, (t) => t.selected);
