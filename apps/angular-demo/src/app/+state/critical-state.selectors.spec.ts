import * as fromCriticalState from './critical-state.reducer';
import { selectCriticalStateState } from './critical-state.selectors';

describe('CriticalState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCriticalStateState({
      [fromCriticalState.criticalStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
