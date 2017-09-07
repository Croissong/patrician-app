import { Component, Input, OnInit } from '@angular/core';

import { TownComponentId } from 'app/core/town';
import { TownService } from 'app/core/town/shared/town.service';
import { Town } from 'app/core/town/town.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'town-header',
  styleUrls: ['town-header.component.css'],
  templateUrl: 'town-header.component.html'
})
export class TownHeaderComponent implements OnInit {

  public towns$: Observable<Town[]>;
  public selectedTown$: Observable<string>;

  @Input() private readonly componentId: TownComponentId;

  constructor(private service: TownService) {
    this.towns$ = service.getTowns();
  }

  public ngOnInit(): void {
    this.selectedTown$ = this.service.getSelectedTown(this.componentId);
  }

  public selectTown(id: string) {
    this.service.selectTown(this.componentId, id);
  }
}
