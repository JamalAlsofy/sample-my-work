import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';

import * as SuggestAppActions from './suggest-app.actions';
import { SuggestAppEffects } from './suggest-app.effects';
import { SuggestAppFacade } from './suggest-app.facade';
import { SuggestAppEntity } from './suggest-app.models';
import {
  SUGGEST_APP_FEATURE_KEY,
  SuggestAppState,
  initialSuggestAppState,
  suggestAppReducer,
} from './suggest-app.reducer';
import * as SuggestAppSelectors from './suggest-app.selectors';

interface TestSchema {
  suggestApp: SuggestAppState;
}

describe('SuggestAppFacade', () => {
  let facade: SuggestAppFacade;
  let store: Store<TestSchema>;
  const createSuggestAppEntity = (id: string, name = ''): SuggestAppEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SUGGEST_APP_FEATURE_KEY, suggestAppReducer),
          EffectsModule.forFeature([SuggestAppEffects]),
        ],
        providers: [SuggestAppFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(SuggestAppFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await firstValueFrom(facade.allSuggestApp$);
      let isLoaded = await firstValueFrom(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await firstValueFrom(facade.allSuggestApp$);
      isLoaded = await firstValueFrom(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadSuggestAppSuccess` to manually update list
     */
    it('allSuggestApp$ should return the loaded list; and loaded flag == true', async () => {
      let list = await firstValueFrom(facade.allSuggestApp$);
      let isLoaded = await firstValueFrom(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        SuggestAppActions.loadSuggestAppSuccess({
          suggestApp: [
            createSuggestAppEntity('AAA'),
            createSuggestAppEntity('BBB'),
          ],
        })
      );

      list = await firstValueFrom(facade.allSuggestApp$);
      isLoaded = await firstValueFrom(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
