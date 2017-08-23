import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from 'app/core/town/shared';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'inventory-table',
  styleUrls: ['inventory-table.component.css'],
  templateUrl: 'inventory-table.component.html'
})
export class InventoryTableComponent {
  @Input() public items: Item[];

  public columns = [
    { name: 'Item', prop: 'name' },
    { name: 'Buy' },
    { name: 'Sell' }
  ];
}
