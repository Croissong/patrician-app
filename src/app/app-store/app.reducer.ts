import { routerReducer as router, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer } from '@ngrx/store';
import { hmrReducer } from 'app/app-store/hmr';
import { Inventory, TownState } from 'app/core/town';
import { townHandlers } from 'app/core/town/town.reducer';
import { PROD } from 'app/environment';

export interface AppState {
  router: RouterReducerState;
  inventory: { [key: string]: Inventory[] };
  town: TownState;
}

export const reducers = {
  inventory: createReducer<{ [key: string]: Inventory[] }>({}),
  router,
  town: createReducer(townHandlers)
};

function createReducer<T>(handlers: ActionHandlers<T>): ActionReducer<T> {
  return (state: T, action: Action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action.payload) : state;
  };
}

export interface ActionHandlers<T> {
  [key: string]: (state: T, payload?: {}) => T;
}

export interface Action {
  type: string;
  payload?: {};
}

export const metaReducers = !PROD ? [hmrReducer] : [];
