import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular/build/src';
import { AppState } from 'app/app-store';

import { TownComponentId } from 'app/core/town';
import inventoryDateAdded from './gql/inventoryDateAdded.gql';
import { getItems } from './inventory.selector';

@Injectable()
export class InventoryService {
  constructor(private store: Store<AppState>, private apollo: Apollo) {
    this.getInventoryDates();
  }

  public getInventoryDates() {
    this.apollo.query({ query: inventoryDateAdded })
      .subscribe((result) => console.log(result));
  }

  public selectItems(componentId: TownComponentId) {
    return this.store.select(getItems[componentId]);
  }
}
