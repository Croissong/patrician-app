import { Action } from '@ngrx/store';
import { ActionHandlers } from 'app/app-store';
import { TownState } from 'app/core/town';
import { set } from 'monolite';

const SELECT_TOWN = 'SELECT_TOWN';

export class SelectTownAction implements Action {
  public readonly type = SELECT_TOWN;
  constructor(public payload: string) { }
}

export const townSelectHandlers: ActionHandlers<TownState> = {
  [SELECT_TOWN]: (s: TownState, id: string) => set(s, (_) => _.selected)(id)
};
