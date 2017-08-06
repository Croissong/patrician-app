import { Component } from '@angular/core';

import { TownService } from 'app/core/town/shared/town.service';
import { Town } from 'app/core/town/town.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'town-header',
  styleUrls: ['town-header.component.css'],
  templateUrl: 'town-header.component.html'
})
export class TownHeaderComponent {
  public towns$: Observable<Town[]>;
  public selectedTown$: Observable<string>;

  constructor(private service: TownService) {
    this.towns$ = service.getTowns();
    this.selectedTown$ = service.getSelectedTown();
  }

  public selectTown(id: string) {
    this.service.selectTown(id);
  }
}
