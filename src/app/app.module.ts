import { ApplicationRef, NgModule } from '@angular/core';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { SharedModule } from './shared';

import { CoreModule } from './core';
import { RoutesModule } from './routes';

import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from './environment';

import { Store } from '@ngrx/store';
import { AppState } from 'app/app-store';
import { HmrStateAction } from 'app/app-store/hmr';
import '../styles/styles.css';

interface StoreType {
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
  state: AppState;
}

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
      const restoreInputValues = store.restoreInputValues;
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
