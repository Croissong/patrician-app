import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { Observable } from 'rxjs/Observable';
import { getItems, Item } from './';

@Component({
  selector: 'inventory',
  styleUrls: [],
  templateUrl: './inventory.component.html'
})
export class InventoryComponent {
  public items$: Observable<Item[]>;

  constructor(store: Store<AppState>) {
    this.items$ = store.select(getItems);
  }

}
