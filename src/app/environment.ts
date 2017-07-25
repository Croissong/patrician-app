import { ApplicationRef, enableProdMode } from '@angular/core';
import { disableDebugTools, enableDebugTools } from '@angular/platform-browser';

let PROVIDERS: Array<{}> = [
  /**
   * Common env directives
   */
];

/**
 * Angular debug tools in the dev console
 * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
 */
let _decorateModuleRef = <T>(value: T): T => value;

export const PROD = 'production' === ENV;

if (PROD) {
  enableProdMode();

  _decorateModuleRef = (modRef: {}) => {
    disableDebugTools();

    return modRef;
  };

  PROVIDERS = [
    ...PROVIDERS
    /**
     * Custom providers in production.
     */
  ];

} else {

  _decorateModuleRef = (modRef: {}) => {
    const appRef = modRef.injector.get(ApplicationRef);
    const cmpRef = appRef.components[0];

    const _ng = (window as {}).ng;
    enableDebugTools(cmpRef);
    (window as {}).ng.probe = _ng.probe;
    (window as {}).ng.coreTokens = _ng.coreTokens;
    return modRef;
  };

  /**
   * Development
   */
  PROVIDERS = [
    ...PROVIDERS
    /**
     * Custom providers in development.
     */
  ];

}

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
