import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Inventory } from 'app/core/town';
import isSameDay from 'date-fns/is_same_day';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'town-date-select',
  styleUrls: [],
  templateUrl: 'date-select.component.html'
})
export class TownDateSelectComponent {
  @Input() private inventories: Inventory[];
  @Input() private set selected(date: number) {
    this.selectedDate.patchValue(new Date(date));
  }
  @Output() public select = new EventEmitter<string>();

  public selectedDate = new FormControl();
  public pickerFilter = (d: Date) => this.hasInventory(d);

  public onChange(d: Date) {
    const inventory = this.inventories.find((i) => isSameDay(i.date, d));
    if (inventory) {
      this.select.emit(inventory.id);
    }
  }

  private hasInventory(d: Date) {
    return this.inventories.some((i) => isSameDay(i.date, d));
  }
}
