import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ProductActions from './product.actions';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductEffects {
    private apiUrl = 'http://localhost:3000/products';
    private readonly actions$ = inject(Actions);
    private readonly http = inject(HttpClient);
    // constructor(
    //     private actions$: Actions,
    //     private http: HttpClient
    // ) { }

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() =>
                this.http.get<Product[]>(this.apiUrl).pipe(
                    map(products => ProductActions.loadProductsSuccess({ products })),
                    catchError(error => of(ProductActions.loadProductsFailure({ error: error.message })))
                )
            )
        )
    );

    addProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.addProduct),
            mergeMap(action =>
                this.http.post<Product>(this.apiUrl, action.product).pipe(
                    map(product => ProductActions.addProductSuccess({ product })),
                    catchError(error => of(ProductActions.loadProductsFailure({ error: error.message })))
                )
            )
        )
    );

    updateProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.updateProduct),
            mergeMap(action =>
                this.http.put<Product>(`${this.apiUrl}/${action.product.id}`, action.product).pipe(
                    map(product => ProductActions.updateProductSuccess({ product })),
                    catchError(error => of(ProductActions.loadProductsFailure({ error: error.message })))
                )
            )
        )
    );

    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.deleteProduct),
            mergeMap(action =>
                this.http.delete(`${this.apiUrl}/${action.id}`).pipe(
                    map(() => ProductActions.deleteProductSuccess({ id: action.id })),
                    catchError(error => of(ProductActions.loadProductsFailure({ error: error.message })))
                )
            )
        )
    );


}