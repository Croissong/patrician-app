import { ActionReducer } from '@ngrx/store';
import { ActionHandlers, AppState } from 'app/app-store';
import { Action } from './utils';

const RESTORE_HMR_STATE = 'RESTORE_HMR_STATE';

export const handlers: ActionHandlers<AppState> = {
  [RESTORE_HMR_STATE]: (state: AppState, payload: AppState) => payload
};

export class HmrStateAction implements Action {
  public readonly type = RESTORE_HMR_STATE;

  constructor(public payload: AppState) { }
}

export function hmrReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState = initialState, action: Action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action.payload) : reducer(state, action);
  };
}
