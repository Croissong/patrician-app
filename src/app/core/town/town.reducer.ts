import { townSelectHandlers } from './town-header/town-select/town-select.reducer';

export interface TownState {
  selected: string;
}

export const townHandlers = {
  ...townSelectHandlers
};
