import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, removeProduct, clearCart } from '../state/cart.actions';
import { CartState } from '../state/cart.state';
import { Product, CartItem } from '../models/product.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    cartItems$: Observable<CartItem[]>;
    constructor(private store: Store<{ cart: CartState }>) {
        this.cartItems$ = store.select(state => state.cart.items);
    }

    addProduct(product: Product) {
        this.store.dispatch(addProduct({ product }));
    }

    removeProduct(productId: number) {
        this.store.dispatch(removeProduct({ productId }));
    }

    clearCart() {
        this.store.dispatch(clearCart());
    }
}
