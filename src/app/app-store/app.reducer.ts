import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { hmrReducer } from 'app/app-store/hmr';
import {
  createInventoryReducer, createTownReducer, InventoryState,
  TownState
} from 'app/core/town';
import { PROD } from 'app/environment';

export interface AppState {
  router: RouterReducerState;
  inventory: InventoryState;
  town: TownState;
}

export const createReducers = () => ({
  inventory: createInventoryReducer(),
  router: routerReducer,
  town: createTownReducer()
});

export const metaReducers = !PROD ? [hmrReducer] : [];
