import { Component, Input } from '@angular/core';

@Component({
  selector: 'town-select',
  styleUrls: [],
  templateUrl: 'town-select.component.html'
})
export class TownSelectComponent {
  @Input() towns: string[];
}
