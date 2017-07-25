import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PROD } from 'app/environment';
import { AppState, metaReducers, reducers } from './app.reducer';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule.forRoot(reducers, { initialState, metaReducers }),
    StoreRouterConnectingModule,
    !PROD ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ]
})
export class AppStoreModule {
  constructor() {
    hydrateRoute(initialState);
  }
}

function hydrateRoute(state: AppState) {
  if (state.router) {
    history.replaceState({}, '', state.router.state.url);
  }
}
