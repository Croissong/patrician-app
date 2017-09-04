import { InjectionToken, NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PROD } from 'app/environment';
import { AppState, createReducers } from './app.reducer';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export function getReducers() {
  return createReducers();
}

export function getInitialState() {
  return initialState as AppState;
}

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule.forRoot(REDUCER_TOKEN, { initialState: getInitialState }),
    StoreRouterConnectingModule,
    !PROD ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  providers: [{
    provide: REDUCER_TOKEN,
    useFactory: getReducers
  }]
})
export class AppStoreModule {
  constructor() {
    hydrateRoute(initialState as AppState);
  }
}

function hydrateRoute(state: AppState) {
  if (state.router) {
    history.replaceState({}, '', state.router.state.url);
  }
}
