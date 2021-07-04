import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from './model/item.model';
import { ItemFormData } from '../component/item-form/item-form.component';
import { CartService } from './cart.service';

@Injectable()
export class ItemService {

  constructor(
    private db: AngularFirestore,
    private cartService: CartService, 
  ) { }

  getItems(cartId: string): Observable<Item[]> {
    return this.db.collection(
      'items', 
      ref => ref.where('cartId', '==', cartId)
    ).valueChanges({ 
      idField: 'id' 
     }) as Observable<Item[]>;
  }

  async createItem(
    cartId: string, 
    data: ItemFormData,
  ): Promise<void> {
    await this.db.collection('items').add({
      name: data.name,
      description: data.description,
      price: data.price,
      sku: data.sku,
      cartId,
    });

    await this.cartService.updateCartTotal(cartId, data.price, true);
  }

  async updateItem(
    itemId: string, 
    data: ItemFormData,
  ): Promise<void> {
    const item = await this.getItem(itemId);

    if (item) {
      await this.cartService.updateCartTotal(item.cartId, item.price, false);
      await this.db.collection('items')
        .doc(itemId)
        .set({
          ...item,
          ...data
        });
      await this.cartService.updateCartTotal(item.cartId, data.price, true);
    }
  }

  async deleteItem(itemId: string): Promise<void> {
    const item = await this.getItem(itemId);

    if (item) {
      await this.cartService.updateCartTotal(item.cartId, item.price, false);
      await this.db.collection('items')
        .doc(itemId)
        .delete();
    }
  }

  async getItem(itemId: string): Promise<Item|undefined> {
    const cart = await this.db.collection('items').doc(itemId).get().toPromise();
    const data = cart.data() as Item;

    if (data) {
      return {
        ...data,
        id: cart.id,
      };
    }

    return;
  }
}
