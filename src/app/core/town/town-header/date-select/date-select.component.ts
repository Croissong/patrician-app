import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import isSameDay from 'date-fns/is_same_day'
import { Inventory } from 'app/core/town';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'town-date-select',
  styleUrls: [],
  templateUrl: 'date-select.component.html'
})
export class TownDateSelectComponent implements OnInit {
  @Input() private inventories: Inventory[];
  public pickerFilter = (d: Date) => this.hasInventory(d);

  public ngOnInit() {
  }

  public hasInventory(d: Date) {
    return this.inventories.some((i) => isSameDay(i.date, d));
  }
}
