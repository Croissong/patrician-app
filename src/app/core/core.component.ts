import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { getItems, Item } from 'app/core/town/inventory';
import { Observable } from 'rxjs/Observable';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'core',
  styleUrls: ['./core.component.css'],
  templateUrl: './core.component.html'
})
export class CoreComponent {
  public items$: Observable<Item[]>;
  public columns = [
    { name: 'Buy' },
    { name: 'Sell' }
  ];

  constructor(store: Store<AppState>) {
    this.items$ = store.select(getItems);
  }

}
