import { SuggestedModel } from './suggest-app.models';
import {
  suggestAppAdapter,
  SuggestAppPartialState,
  initialSuggestAppState,
} from './suggest-app.reducer';
import * as SuggestAppSelectors from './suggest-app.selectors';

describe('SuggestApp Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSuggestAppId = (it: SuggestedModel) => it.id;
  const createSuggestedModel = (id: string, title = '',description='',url='',image='') =>
    ({
      // id,
    // name: name || `name-${id}`,
    id,
    title:title,
    description: description,
    url: url,
    image: image
    } as SuggestedModel);

  let state: SuggestAppPartialState;

  beforeEach(() => {
    state = {
      suggestApp: suggestAppAdapter.setAll(
        [
          createSuggestedModel('PRODUCT-AAA'),
          createSuggestedModel('PRODUCT-BBB'),
          createSuggestedModel('PRODUCT-CCC'),
        ],
        {
          ...initialSuggestAppState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('SuggestApp Selectors', () => {
    it('selectAllSuggestApp() should return the list of SuggestApp', () => {
      const results = SuggestAppSelectors.selectAllSuggestApp(state);
      const selId = getSuggestAppId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = SuggestAppSelectors.selectEntity(
        state
      ) as SuggestedModel;
      const selId = getSuggestAppId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectSuggestAppLoaded() should return the current "loaded" status', () => {
      const result = SuggestAppSelectors.selectSuggestAppLoaded(state);

      expect(result).toBe(true);
    });

    it('selectSuggestAppError() should return the current "error" state', () => {
      const result = SuggestAppSelectors.selectSuggestAppError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
