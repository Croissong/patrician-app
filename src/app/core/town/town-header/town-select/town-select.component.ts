import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'town-select',
  styleUrls: [],
  templateUrl: 'town-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TownSelectComponent {
  @Input() towns: string[];
  @Input() set selected(v: string) {
    this.selectedTown.patchValue(v)
  };
  @Output() select = new EventEmitter<string>();
  selectedTown = new FormControl();

  public onChange(id: string) {
    this.select.emit(id);
  }
}
