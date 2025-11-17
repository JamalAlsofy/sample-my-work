
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Product } from '../models/product.model';

export interface ProductState extends EntityState<Product> {
    loading: boolean;
    error: string | null;
    selectedProductId: number | null;
}

export const productAdapter = createEntityAdapter<Product>({
    selectId: (product) => product.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const initialState: ProductState = productAdapter.getInitialState({
    loading: false,
    error: null,
    selectedProductId: null,
});