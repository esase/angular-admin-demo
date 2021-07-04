import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/service/auth-guard.service';
import { CartListPage } from './page/cart-list-page/cart-list.page';
import { ItemListPage } from './page/item-list-page/item-list.page';
import { CartResolver } from './service/cart-resolver.service';
import { CartService } from './service/cart.service';
import { ItemService } from './service/item.service';

const routes: Routes = [
  { 
    path: '', 
    component: CartListPage,
    canActivate: [AuthGuard],
  },
  { 
    path: ':id/items', 
    component: ItemListPage,
    canActivate: [AuthGuard],
    resolve: {
      cart: CartResolver,
    }
  }
];

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CartService,
    CartResolver,
    ItemService,
  ],
})
export class CartsRoutingModule { }
