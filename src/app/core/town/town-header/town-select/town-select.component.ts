import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'town-select',
  styleUrls: [],
  templateUrl: 'town-select.component.html'
})
export class TownSelectComponent {
  @Input() public towns: string[];
  @Input() set selected(v: string) {
    this.selectedTown.patchValue(v);
  }
  @Output() public select = new EventEmitter<string>();
  public selectedTown = new FormControl();

  public onChange(id: string) {
    this.select.emit(id);
  }
}
