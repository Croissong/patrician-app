import { Component, Input, OnInit } from '@angular/core';

import { Inventory, TownComponentId } from 'app/core/town';
import { InventoryService, TownService } from 'app/core/town/shared';
import { Town } from 'app/core/town/town.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'town-header',
  styleUrls: ['town-header.component.css'],
  templateUrl: 'town-header.component.html'
})
export class TownHeaderComponent implements OnInit {

  @Input() private readonly componentId: TownComponentId;

  public towns$: Observable<Town[]>;
  public selectedTown$: Observable<string>;
  public inventories$: Observable<Inventory[]>;
  public selectedDate$: Observable<number>;

  constructor(private townService: TownService, private inventoryService: InventoryService) {
    this.towns$ = townService.getTowns();
  }

  public ngOnInit(): void {
    this.selectedTown$ = this.townService.getSelectedTown(this.componentId);
    this.inventories$ = this.inventoryService.getInventories(this.componentId);
    this.selectedDate$ = this.inventoryService.getInventory(this.componentId)
      .select((i) => i.date);
  }

  public selectTown(id: string) {
    this.townService.selectTown(this.componentId, id);
  }

  public selectInventory(inventoryId: string) {
    this.inventoryService.selectInventory(this.componentId, inventoryId);
  }
}
