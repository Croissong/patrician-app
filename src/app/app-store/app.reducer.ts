import { routerReducer as router, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, combineReducers, ActionReducerMap } from "@ngrx/store";
import { hmrReducer } from "app/app-store/hmr";
import { PROD } from "app/environment";

export interface AppState {
  router: RouterReducerState;
  test: number
}

export const reducers = {
  router,
  test: createReducer<number>({ dos: (s) => s + 1 })
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

export const reducerFactory = PROD ? combineReducers :
  (reducerMap: ActionReducerMap<AppState, Action>, initialState?: AppState) => hmrReducer(combineReducers(reducerMap), initialState);
