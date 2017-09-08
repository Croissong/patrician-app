import { Action } from '@ngrx/store';
import { set } from 'monolite';

export type TownComponentId =
  'Town1' | 'Town2';

export interface TownState {
  selected: {[component in TownComponentId]: string };
  inventories: { [townId: string]: string[] };
}

const SELECT_TOWN = 'SELECT_TOWN';

type Actions = SelectTownAction;

export class SelectTownAction implements Action {
  public readonly type = SELECT_TOWN;
  constructor(public component: TownComponentId, public id: string) { }
}

export function townReducer(s: TownState, action: Actions): TownState {
  switch (action.type) {
    case SELECT_TOWN: return selectTown(s, action.component, action.id);
    default: return s;
  }
}

function selectTown(s: TownState, component: TownComponentId, id: string) {
  return set(s, (_) => _.selected[component])(id);
}
