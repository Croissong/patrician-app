import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { routes } from './routes';
import { RouteComponent } from './route.component';

@NgModule({
  declarations: [RouteComponent],
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouteComponent]
})
export class AppRoutingModule { }
