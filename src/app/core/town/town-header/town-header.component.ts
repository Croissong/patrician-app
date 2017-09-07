import { Component, Input, OnInit } from '@angular/core';

import { TownComponentId, Inventory } from 'app/core/town';
import { Town } from 'app/core/town/town.model';
import { Observable } from 'rxjs/Observable';
import { InventoryService, TownService } from 'app/core/town/shared';

@Component({
  selector: 'town-header',
  styleUrls: ['town-header.component.css'],
  templateUrl: 'town-header.component.html'
})
export class TownHeaderComponent implements OnInit {

  public inventories$: Observable<Inventory[]>;
  public towns$: Observable<Town[]>;
  public selectedTown$: Observable<string>;

  @Input() private readonly componentId: TownComponentId;

  constructor(private townService: TownService, private inventoryService: InventoryService) {
    this.towns$ = townService.getTowns();
  }

  public ngOnInit(): void {
    this.selectedTown$ = this.townService.getSelectedTown(this.componentId);
    this.inventories$ = this.inventoryService.getInventories(this.componentId);
  }

  public selectTown(id: string) {
    this.townService.selectTown(this.componentId, id);
  }
}
