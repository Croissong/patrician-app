import { Action } from '@ngrx/store';
import { ActionHandlers, createReducer } from 'app/app-store';
import { set } from 'monolite';

export interface TownState {
  selected: string;
}

const SELECT_TOWN = 'SELECT_TOWN';

export class SelectTownAction implements Action {
  public readonly type = SELECT_TOWN;
  constructor(public payload: string) { }
}

const townHandlers: ActionHandlers<TownState> = {
  [SELECT_TOWN]: (s: TownState, id: string) => set(s, (_) => _.selected)(id)
};

export const createTownReducer = () => createReducer(townHandlers);
