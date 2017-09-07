import { Component, Input, OnInit } from '@angular/core';
import { TownComponentId } from 'app/core/town';
import { InventoryService, Item } from 'app/core/town/shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'inventory',
  styleUrls: [],
  templateUrl: './inventory.component.html'
})
export class InventoryComponent implements OnInit {
  public items$: Observable<Item[]>;

  @Input() private readonly componentId: TownComponentId;

  constructor(private service: InventoryService) { }

  public ngOnInit(): void {
    this.items$ = this.service.selectItems(this.componentId);
  }

}
