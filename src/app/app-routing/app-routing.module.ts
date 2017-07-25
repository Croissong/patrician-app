import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouteComponent } from './route.component';
import { routes } from './routes';

@NgModule({
  declarations: [RouteComponent],
  exports: [RouteComponent],
  imports: [RouterModule.forRoot(routes, {})]
})
export class AppRoutingModule { }
