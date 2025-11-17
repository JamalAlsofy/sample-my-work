
import { createReducer, on } from '@ngrx/store';
import { productAdapter, initialState } from './product.state';
import * as ProductActions from './product.actions';

export const productReducer = createReducer(
    initialState,

    // Load
    on(ProductActions.loadProducts, state => ({
        ...state,
        loading: true
    })),
    on(ProductActions.loadProductsSuccess, (state, { products }) =>
        productAdapter.setAll(products, { ...state, loading: false })
    ),

    // CRUD
    on(ProductActions.addProductSuccess, (state, { product }) =>
        productAdapter.addOne(product, state)
    ),
    on(ProductActions.updateProductSuccess, (state, { product }) =>
        productAdapter.updateOne(
            { id: product.id, changes: product },
            state
        )
    ),
    on(ProductActions.deleteProductSuccess, (state, { id }) =>
        productAdapter.removeOne(id, state)
    ),

    // Purchase and Rating
    on(ProductActions.purchaseProduct, (state, { purchase }) => {
        const product = state.entities[purchase.productId];
        if (!product) return state;

        return productAdapter.updateOne(
            {
                id: purchase.productId,
                changes: {
                    quantity: Math.max(0, product.quantity - purchase.quantity)
                }
            },
            state
        );
    }),

    on(ProductActions.rateProduct, (state, { productId, rating }) =>
        productAdapter.updateOne(
            {
                id: productId,
                changes: { rating }
            },
            state
        )
    )
);