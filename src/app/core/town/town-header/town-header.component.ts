import { Component } from '@angular/core';
import { AppState } from "app/app-store";
import { Store, createSelector } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { towns, Town } from "app/core/town/town.model";

@Component({
  selector: 'town-header',
  styleUrls: ['town-header.component.css'],
  templateUrl: 'town-header.component.html'
})
export class TownHeaderComponent {
  towns$: Observable<Town[]>
  constructor(store: Store<AppState>) {
    this.towns$ = store.select(createSelector(
      (s: AppState) => s.inventory,
      (i) => Object.keys(i).map((id) => towns[id])))
  }
}
