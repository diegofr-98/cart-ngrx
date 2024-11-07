import { CartItem } from '../models/product.model';

export interface CartState {
    items: CartItem[];
}

export const initialCartState: CartState = {
    items: [
        {
            product: {
                id: 1,
                name: 'Product 1',
                price: 100
            },
            quantity: 1
        },
        {
            product: {
                id: 2,
                name: 'Product 2',
                price: 200
            },
            quantity: 2
        },
    ]
};
