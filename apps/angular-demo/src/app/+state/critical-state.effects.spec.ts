import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CriticalStateEffects } from './critical-state.effects';

describe('CriticalStateEffects', () => {
  let actions$: Observable<any>;
  let effects: CriticalStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CriticalStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CriticalStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
