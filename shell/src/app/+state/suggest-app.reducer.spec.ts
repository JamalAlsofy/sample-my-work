import { Action } from '@ngrx/store';

import * as SuggestAppActions from './suggest-app.actions';
import { SuggestedModel } from './suggest-app.models';
import {
  SuggestAppState,
  initialSuggestAppState,
  suggestAppReducer,
} from './suggest-app.reducer';

describe('SuggestApp Reducer', () => {
  const createSuggestedModel = (id: string, title = '', description = '', url = '', image = ''): SuggestedModel => ({
    id,
    title: title,
    description: description,
    url: url,
    image: image
  });

  describe('valid SuggestApp actions', () => {
    it('loadSuggestAppSuccess should return the list of known SuggestApp', () => {
      const suggestApp = [
        createSuggestedModel('PRODUCT-AAA'),
        createSuggestedModel('PRODUCT-zzz'),
      ];
      const action = SuggestAppActions.loadSuggestAppSuccess({ suggestApp });

      const result: SuggestAppState = suggestAppReducer(
        initialSuggestAppState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = suggestAppReducer(initialSuggestAppState, action);

      expect(result).toBe(initialSuggestAppState);
    });
  });
});
