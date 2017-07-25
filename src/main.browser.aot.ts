/**
 * Angular bootstrapping
 */
import { NgModuleRef } from '@angular/core/core';
import { platformBrowser } from '@angular/platform-browser';
/**
 * App Module
 * our top level module that holds all of our components.
 */
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';
import { decorateModuleRef } from './app/environment';
/**
 * Bootstrap our Angular app with a top level NgModule.
 */
export async function main(): Promise<void | NgModuleRef<{}>> {
  return platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
  main();
}
