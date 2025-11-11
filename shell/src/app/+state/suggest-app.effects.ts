import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as SuggestAppActions from './suggest-app.actions';
import * as SuggestAppFeature from './suggest-app.reducer';

@Injectable()
export class SuggestAppEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SuggestAppActions.initSuggestApp),
      switchMap(() =>
        of(SuggestAppActions.loadSuggestAppSuccess({ suggestApp: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(SuggestAppActions.loadSuggestAppFailure({ error }));
      })
    )
  );
}
