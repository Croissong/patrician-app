import { SharedModule } from './shared';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { CoreModule } from './core';
import { RoutesModule } from './routes';

import { ENV_PROVIDERS } from './environment';
import { AppComponent } from './app.component';

import '../styles/styles.css';
import { Store } from "@ngrx/store";
import { AppState } from "app/app-store";
import { HmrStateAction } from "app/app-store/hmr";

type StoreType = {
  restoreInputValues: () => void,
  disposeOldHosts: () => void,
  state: AppState
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    RoutesModule
  ],
  providers: [
    ENV_PROVIDERS
  ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef, private _store: Store<AppState>) {
  }

  public hmrOnInit(store: StoreType) {
    if (!store) {
      return;
    }
    this._store.dispatch(new HmrStateAction(store.state));

    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    this._store.subscribe((s) => store.state = s);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
