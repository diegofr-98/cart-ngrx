import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const addProduct = createAction(
    '[Cart] Add Product',
    props<{ product: Product }>()
);

export const removeProduct = createAction(
    '[Cart] Remove Product',
    props<{ productId: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
