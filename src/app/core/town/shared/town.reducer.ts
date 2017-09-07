import { Action } from '@ngrx/store';
import { set } from 'monolite';

export type TownComponentId =
  'Town1' | 'Town2';

export interface TownState {
  selected: {[component in TownComponentId]: string };
}

const SELECT_TOWN = 'SELECT_TOWN';

type Actions = SelectTownAction;

export class SelectTownAction implements Action {
  public readonly type = SELECT_TOWN;
  constructor(public payload: { component: TownComponentId, id: string }) { }
}

export function townReducer(s: TownState, { type, payload }: Actions): TownState {
  switch (type) {
    case SELECT_TOWN: return selectTown(s, payload.component, payload.id);
    default: return s;
  }
}

function selectTown(s: TownState, component: TownComponentId, id: string) {
  return set(s, (_) => _.selected[component])(id);
}
