import { routerReducer as router, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer } from "@ngrx/store";
import { hmrReducer } from "app/app-store/hmr";
import { PROD } from "app/environment";
import { Inventory, TownState } from "app/core/town";
import { townHandlers } from "app/core/town/town.reducer";

export interface AppState {
  router: RouterReducerState;
  inventory: { [key: string]: Inventory[] }
  town: TownState
}

export const reducers = {
  router,
  inventory: createReducer<{ [key: string]: Inventory[] }>({ dos: (s) => s }),
  town: createReducer(townHandlers)
};


function createReducer<T>(handlers: ActionHandlers<T>): ActionReducer<T> {
  return (state: T, action: Action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action.payload) : state;
  };
};

export type ActionHandlers<T> = {
  [key: string]: (state: T, payload?: any) => T;
};

export interface Action {
  type: string;
  payload: any
}

export const metaReducers = !PROD ? [hmrReducer] : [];
