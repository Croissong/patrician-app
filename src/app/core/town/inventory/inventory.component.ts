import { Component } from '@angular/core';
import { InventoryService, Item } from 'app/core/town/shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'inventory',
  styleUrls: [],
  templateUrl: './inventory.component.html'
})
export class InventoryComponent {
  public items$: Observable<Item[]>;

  constructor(service: InventoryService) {
    this.items$ = service.selectItems();
  }

}
