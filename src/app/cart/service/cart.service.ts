import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cart } from './model/cart.model';
import { NbAuthService } from '@nebular/auth';

@Injectable()
export class CartService {

  constructor(
    private db: AngularFirestore,
    private authService: NbAuthService, 
  ) { }

  async getCart(cartId: string): Promise<Cart|undefined> {
    const cart = await this.db.collection('carts').doc(cartId).get().toPromise();
    const data = cart.data() as Cart;

    if (data) {
      return {
        ...data,
        id: cart.id,
      };
    }

    return;
  }

  async deleteCart(cartId: string): Promise<void> {
    await this.db.collection('carts')
      .doc(cartId)
      .delete();
  }

  async createCart(): Promise<void> {
    const userToken = await this.authService.getToken().toPromise();

    await this.db.collection('carts').add({
      userId: userToken.getPayload()['user_id'],
      total: 0,
    });
  }

  async updateCartTotal(
    cartId: string, 
    total: number, 
    increase: boolean = true,
  ): Promise<void> {
    const cart = await this.getCart(cartId);

    if (cart) {
      await this.db.collection('carts')
        .doc(cartId)
        .set({
          ...cart,
          total: increase ? cart.total + total : cart.total - total,
        });
    }
  }

  getCarts(): Observable<Cart[]> {
    return this.db.collection('carts').valueChanges({ 
      idField: 'id' 
     }) as Observable<Cart[]>;
  }
}
