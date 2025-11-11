import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as SuggestAppActions from './suggest-app.actions';
import { SuggestedModel } from './suggest-app.models';

export const SUGGEST_APP_FEATURE_KEY = 'suggestApp';

export interface SuggestAppState extends EntityState<SuggestedModel> {
  items: SuggestedModel[];
  selectedId?: string | number; // which SuggestApp record has been selected
  loaded: boolean; // has the SuggestApp list been loaded
  error?: string | null; // last known error (if any)
}

export interface SuggestAppPartialState {
  readonly [SUGGEST_APP_FEATURE_KEY]: SuggestAppState;
}

export const suggestAppAdapter: EntityAdapter<SuggestedModel> =
  createEntityAdapter<SuggestedModel>();

export const initialSuggestAppState: SuggestAppState =
  suggestAppAdapter.getInitialState({
    // set initial required properties
    items: [],
    selectedId: '', // which SuggestApp record has been selected
    loaded: false, // has the SuggestApp list been loaded
    error: '' 
    
  });
  /**********
   * export const productsReducer = createReducer(
initialState,
on(SuggestAppActions.loadProducts, state => ({ ...state, loading: true })),
on(SuggestAppActions.loadProductsSuccess, (state, { products }) => ({ ...state, loading: false, items: products })),
on(SuggestAppActions.loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error })),
on(SuggestAppActions.addProduct, (state, { product }) => ({ ...state, items: [...state.items, product] })),
on(SuggestAppActions.updateProduct, (state, { product }) => ({ ...state, items: state.items.map(p => p.id === product.id ? product : p) })),
on(SuggestAppActions.deleteProduct, (state, { id }) => ({ ...state, items: state.items.filter(p => p.id !== id) })),
);
   */

const reducer = createReducer(
  initialSuggestAppState,
  on(SuggestAppActions.initSuggestApp, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SuggestAppActions.loadSuggestAppSuccess, (state, { suggestApp }) =>
    suggestAppAdapter.setAll(suggestApp, { ...state, loaded: true })
  ),
  on(SuggestAppActions.loadSuggestAppFailure, (state, { error }) => ({
    ...state,
    error,
  })), on(SuggestAppActions.addSuggestedApps, (state, { suggestApp }) => ({ ...state, items: [...state.items, suggestApp] })),
  on(SuggestAppActions.updateSuggestedApps, (state, { suggestApp }) => ({ ...state, items: state.items.map(p => p.id === suggestApp.id ? suggestApp : p) })),
  on(SuggestAppActions.deleteSuggestedApps, (state, { id }) => ({ ...state, items: state.items.filter(p => p.id !== id) })),
);


export function suggestAppReducer(
  state: SuggestAppState | undefined,
  action: Action
) {
  return reducer(state, action);
}
/********************
import { createReducer, on } from '@ngrx/store';
import * as SuggestAppActions from './products.actions';
import { Product } from '../../models/product.model';


export interface ProductsState {
items: Product[];
loading: boolean;
error?: any;
}


export const initialState: ProductsState = {
items: [],
loading: false
};


export const productsReducer = createReducer(
initialState,
on(SuggestAppActions.loadProducts, state => ({ ...state, loading: true })),
on(SuggestAppActions.loadProductsSuccess, (state, { products }) => ({ ...state, loading: false, items: products })),
on(SuggestAppActions.loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error })),
on(SuggestAppActions.addProduct, (state, { product }) => ({ ...state, items: [...state.items, product] })),
on(SuggestAppActions.updateProduct, (state, { product }) => ({ ...state, items: state.items.map(p => p.id === product.id ? product : p) })),
on(SuggestAppActions.deleteProduct, (state, { id }) => ({ ...state, items: state.items.filter(p => p.id !== id) })),
);
 *****************/
