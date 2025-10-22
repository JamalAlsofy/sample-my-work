import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CriticalStateEffects } from './app/+state/critical-state.effects';
import { reducer } from './app/+state/critical-state.reducer';


bootstrapApplication(App, {
  providers: [
    provideStore({ critical: reducer }),
    provideEffects([CriticalStateEffects]),
  ],
});
