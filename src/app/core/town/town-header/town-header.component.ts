import { Component } from '@angular/core';
import { AppState } from "app/app-store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Town } from "app/core/town/town.model";
import { SelectTownAction } from "app/core/town/town-header/town-select/town-select.reducer";
import { getTowns, getSelectedTown } from './town-header.selector';

@Component({
  selector: 'town-header',
  styleUrls: ['town-header.component.css'],
  templateUrl: 'town-header.component.html'
})
export class TownHeaderComponent {
  towns$: Observable<Town[]>;
  selectedTown$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.towns$ = store.select(getTowns);
    this.selectedTown$ = store.select(getSelectedTown);
  }

  public selectTown(id: string) {
    this.store.dispatch(new SelectTownAction(id))
  }
}
