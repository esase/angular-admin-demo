import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cart.service';
import { Cart } from '../../service/model/cart.model';
import { NbToastrService, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-cart-list-page',
  templateUrl: './cart-list-page.html',
})
export class CartListPage implements OnInit {
  cartList$: Observable<Cart[]>;

  constructor(
    private cartService: CartService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {
    this.cartList$ = this.cartService.getCarts();
  }

  ngOnInit(): void {}

  async createCart() {
    await this.cartService.createCart();
    this.toastrService.success('', 'Cart created');
  }

  async showConfirmationDialog(cartId: string, dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
       context: cartId,
    });
  }

  async deleteCart(cartId: string) {
    await this.cartService.deleteCart(cartId);
    this.toastrService.success('', 'Cart deleted');
  }
}
