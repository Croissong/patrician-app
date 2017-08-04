import { InjectionToken, NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PROD } from 'app/environment';
import { AppState, reducers } from './app.reducer';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export function getReducers() {
  return reducers;
}

export function getInitialState() {
  return { ...initialState };
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
    hydrateRoute(initialState);
  }
}

function hydrateRoute(state: AppState) {
  if (state.router) {
    history.replaceState({}, '', state.router.state.url);
  }
}
