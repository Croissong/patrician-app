import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'core',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./core.component.css'],
  templateUrl: './core.component.html'
})
export class CoreComponent {
  constructor() {
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
