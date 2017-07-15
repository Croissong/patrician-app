import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { AppState } from "app/app-store";

@Component({
  selector: 'core',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./core.component.css'],
  templateUrl: './core.component.html'
})
export class CoreComponent {

  public test$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.test$ = store.select('test');
  }

  public click() {
    this.store.dispatch({ type: 'dos' });
  }

  public rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  public columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

}
