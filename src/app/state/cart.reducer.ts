import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct, clearCart } from './cart.actions';
import { initialCartState } from './cart.state';

export const cartReducer = createReducer(
    initialCartState,
    on(addProduct, (state, { product }) => {
        const existingItem = state.items.find(item => item.product.id === product.id);
        const updatedItems = existingItem
            ? state.items.map(item =>
                item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            : [...state.items, { product, quantity: 1 }];

        return { ...state, items: updatedItems };
    }),
    on(removeProduct, (state, { productId }) => ({
        ...state,
        items: state.items.filter(item => item.product.id !== productId)
    })),
    on(clearCart, state => initialCartState),
    // on(clearCart, state => ({...state, items: []}))
);
