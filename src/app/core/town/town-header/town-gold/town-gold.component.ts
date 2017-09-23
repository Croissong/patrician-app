import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Inventory } from 'app/core/town';
import isSameDay from 'date-fns/is_same_day';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'town-gold',
  styleUrls: [],
  templateUrl: 'town-gold.component.html'
})
export class TownGoldComponent {
  @Input() public value: number;
}
