import { ActionReducer } from '@ngrx/store';

export const createReducer = <T>(handlers: ActionHandlers<T>): ActionReducer<T> => {
  return (state: T, action: Action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action.payload) : state;
  };
};

export interface ActionHandlers<T> {
  [key: string]: (state: T, payload?: {}) => T;
}

export interface Action {
  type: string;
  payload?: {};
}
