import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as SuggestAppActions from './suggest-app.actions';
import { SuggestAppEffects } from './suggest-app.effects';

describe('SuggestAppEffects', () => {
  let actions: Observable<Action>;
  let effects: SuggestAppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SuggestAppEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SuggestAppEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SuggestAppActions.initSuggestApp() });

      const expected = hot('-a-|', {
        a: SuggestAppActions.loadSuggestAppSuccess({ suggestApp: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
