import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: ['store', 'merchant', 'shop'],
  
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
/**** 
 import { withModuleFederation } from '@nx/angular/module-federation';
import { shareAll } from '@nx/angular/module-federation/utils';

export default withModuleFederation({
  name: 'shell',
  remotes: ['store', 'merchant', 'shop'],
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
});

 */