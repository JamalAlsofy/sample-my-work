import { createAction, props } from '@ngrx/store';
import { SuggestedModel } from './suggest-app.models';

export const initSuggestApp = createAction('[SuggestApp Page] Init');

export const loadSuggestAppSuccess = createAction(
  '[SuggestApp/API] Load SuggestApp Success',
  props<{ suggestApp: SuggestedModel[] }>()
);

export const loadSuggestAppFailure = createAction(
  '[SuggestApp/API] Load SuggestApp Failure',
  props<{ error: any }>()
);
export const addSuggestedApps = createAction('[SuggestedModel] Add', props<{ suggestApp: SuggestedModel }>());
export const updateSuggestedApps = createAction('[SuggestedModel] Update', props<{ suggestApp: SuggestedModel }>());
export const deleteSuggestedApps = createAction('[SuggestedModel] Delete', props<{ id: string }>());

