import { Component, Input } from '@angular/core';

@Component({
  selector: 'town',
  styleUrls: ['town.component.css'],
  templateUrl: 'town.component.html'
})
export class TownComponent {
  @Input() public id: string;
}
