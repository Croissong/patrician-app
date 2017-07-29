import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from 'app/core/town/inventory';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'inventory-table',
  styleUrls: [],
  templateUrl: './inventory-table.component.html'
})
export class InventoryTableComponent {
  @Input() public items: Item[];

  public columns = [
    { name: 'Buy' },
    { name: 'Sell' }
  ];
}
