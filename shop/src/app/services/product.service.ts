// src/app/services/product.service.ts
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as ProductActions from '../store/product.actions';
import { Product, Purchase } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private store = inject(Store<AppState>);

    loadProducts() {
        this.store.dispatch(ProductActions.loadProducts());
    }

    addProduct(product: Omit<Product, 'id'>) {
        this.store.dispatch(ProductActions.addProduct({ product }));
    }

    updateProduct(product: Product) {
        this.store.dispatch(ProductActions.updateProduct({ product }));
    }

    deleteProduct(id: number) {
        this.store.dispatch(ProductActions.deleteProduct({ id }));
    }

    purchaseProduct(purchase: Purchase) {
        this.store.dispatch(ProductActions.purchaseProduct({ purchase }));
    }

    rateProduct(productId: number, rating: number) {
        this.store.dispatch(ProductActions.rateProduct({ productId, rating }));
    }

    getProducts() {
        return this.store.select(state => state.products);
    }
}