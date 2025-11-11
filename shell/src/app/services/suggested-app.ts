import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SuggestedModel } from '../+state/suggest-app.models';
import { Store } from '@ngrx/store';
import * as SuggestedActions from '../+state/suggest-app.actions';
import { selectAllSuggestApp, selectSuggestAppLoaded } from '../+state/suggest-app.selectors';



@Injectable({
  providedIn: 'root'
})
export class SuggestedServices {

  suggested$ = this.store.select(selectAllSuggestApp);
  loading$ = this.store.select(selectSuggestAppLoaded);
  constructor(private store: Store) { }
  private suggesteds: SuggestedModel[] = [
    { id: 's1', title: 'Shop', description: 'markting for selling and bay anything', url: 'shop', image: '' },
    { id: 's2', title: 'Store', description: 'markting for selling and bay anything', url: 'store', image: '' },
  ];
  loadsuggestes(): Observable<SuggestedModel[]> {
    return of(this.suggesteds).pipe(delay(200));
  }
  getById(id: string): Observable<SuggestedModel | undefined> {
    return of(this.suggesteds.find(s => s.id === id)).pipe(delay(150));
  }
  addSuggestedApps(suggested: SuggestedModel): Observable<SuggestedModel> {
    this.suggesteds.push(suggested);
    return of(suggested).pipe(delay(200));
  }
  updateSuggestedApps(suggested: SuggestedModel): Observable<SuggestedModel> {
    this.suggesteds = this.suggesteds.map(p => p.id === suggested.id ? suggested : p);
    return of(suggested).pipe(delay(200));
  }
  deleteSuggestedApps(id: string): Observable<string> {
    this.suggesteds = this.suggesteds.filter(p => p.id !== id);
    return of(id).pipe(delay(200));
  }
  // loadsuggestes() {
  //   this.store.dispatch(SuggestedActions.(suggested));
  // }

  // addSuggestedApps(suggested: any) {
  //   this.store.dispatch(SuggestedActions.addSuggestedApps({ suggested }));
  // }

  // updateSuggestedApps(suggested: SuggestedModel) {
  //   this.store.dispatch(SuggestedActions.updateSuggestedApps({ suggested }));
  // }

  // deleteSuggestedApps(id: string) {
  //   this.store.dispatch(SuggestedActions.deleteSuggestedApps({ id }));
  // }

  // deleteMultiple(ids: string[]) {
  //   this.store.dispatch(SuggestedActions.deleteSuggestedApps({ ids }));
  // }

}

/***********
 Simple Service 
  import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { selectAllProducts, selectLoading } from './products.selectors';
import { loadSuggestAppSuccess, deleteSuggestedApps, addSuggestedApps, updateSuggestedApps } from '../+state/suggest-app.actions';
import { suggestAppAdapter } from '../+state/suggest-app.reducer';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  products$ = this.store.select(selectAllProducts);
  loading$ = this.store.select(selectLoading);

  constructor(private store: Store) {}

  loadProducts() {
    this.store.dispatch(ProductsActions.loadProducts());
  }

  addProduct(product: any) {
    this.store.dispatch(ProductsActions.addProduct({ product }));
  }

  updateProduct(product: any) {
    this.store.dispatch(ProductsActions.updateProduct({ product }));
  }

  deleteProduct(id: string) {
    this.store.dispatch(ProductsActions.deleteProduct({ id }));
  }

  deleteMultiple(ids: string[]) {
    this.store.dispatch(ProductsActions.deleteMultiple({ ids }));
  }
}

 */