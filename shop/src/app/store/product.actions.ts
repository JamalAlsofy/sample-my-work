
import { createAction, props } from '@ngrx/store';
import { Product, Purchase } from '../models/product.model';

export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
    '[Product] Load Products Success',
    props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
    '[Product] Load Products Failure',
    props<{ error: string }>()
);

export const addProduct = createAction(
    '[Product] Add Product',
    props<{ product: Omit<Product, 'id'> }>()
);
export const addProductSuccess = createAction(
    '[Product] Add Product Success',
    props<{ product: Product }>()
);

export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
    '[Product] Update Product Success',
    props<{ product: Product }>()
);

export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ id: number }>()
);
export const deleteProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{ id: number }>()
);


export const purchaseProduct = createAction(
    '[Product] Purchase Product',
    props<{ purchase: Purchase }>()
);

export const rateProduct = createAction(
    '[Product] Rate Product',
    props<{ productId: number; rating: number }>()
);