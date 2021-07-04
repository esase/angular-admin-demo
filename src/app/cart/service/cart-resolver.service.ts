import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';
import { Cart } from './model/cart.model';

@Injectable()
export class CartResolver implements Resolve<Cart> {

  constructor(
    private router: Router,
    private cartService: CartService, 
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
  ): Promise<Observable<any> | Promise<any> | any> {
    let cart: Cart | undefined;
    const id = route.paramMap.get('id');
    
    if (id) {
      cart = await this.cartService.getCart(id);
    }

    if (!cart) {
      this.router.navigate(['/']);

      return;
    }
  
    return cart;
  }
}
