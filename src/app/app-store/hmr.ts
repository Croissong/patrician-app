import { Action, ActionReducer } from '@ngrx/store';
import { AppState } from 'app/app-store';

const RESTORE_HMR_STATE = 'RESTORE_HMR_STATE';

type Actions = HmrStateAction;

export class HmrStateAction implements Action {
  public readonly type = RESTORE_HMR_STATE;

  constructor(public restoredState: AppState) { }
}

export function hmrReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState = initialState, action: Actions) {
    switch (action.type) {
      case RESTORE_HMR_STATE: return action.restoredState;
      default: return reducer(state, action);
    }
  };
}
