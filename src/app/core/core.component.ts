import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "app/app-store";
import { Item, getItems } from "app/core/town/inventory";

@Component({
  selector: 'core',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./core.component.css'],
  templateUrl: './core.component.html'
})
export class CoreComponent {
  items$: Observable<Item[]>;

  constructor(store: Store<AppState>) {
    this.items$ = store.select(getItems);
  }

  public columns = [
    { name: 'Buy' },
    { name: 'Sell' }
  ];

}
