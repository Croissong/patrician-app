import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular/build/src';
import { AppState } from 'app/app-store';

import { TownComponentId } from 'app/core/town';
import inventoryDateAdded from './gql/inventoryDateAdded.gql';
import { getInventories, getItems } from './inventory.selector';

@Injectable()
export class InventoryService {
  constructor(private store: Store<AppState>, private apollo: Apollo) { }

  public getInventories(componentId: TownComponentId) {
    this.apollo.query({ query: inventoryDateAdded })
      .subscribe((result) => console.log(result));
    return this.store.select(getInventories[componentId]);
  }

  public selectItems(componentId: TownComponentId) {
    return this.store.select(getItems[componentId]);
  }
}
