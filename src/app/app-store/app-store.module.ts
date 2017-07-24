import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppState, metaReducers, reducers } from './app.reducer';
import { StoreModule } from "@ngrx/store";
import { PROD } from "app/environment";

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { initialState, metaReducers }),
    StoreRouterConnectingModule,
    !PROD ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [],
  exports: []
})
export class AppStoreModule {
  constructor() {
    hydrateRoute(initialState);
  }
}

function hydrateRoute(state: AppState) {
  if (state.router) {
    history.replaceState({}, null, state.router.state.url);
  }
}
