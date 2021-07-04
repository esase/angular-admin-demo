import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';

import { CartsRoutingModule } from './cart-routing.module';
import { CartListPage } from './page/cart-list-page/cart-list.page';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { ItemListPage } from './page/item-list-page/item-list.page';
import { LoadingComponent } from './component/loading/loading.component';
import { ItemListComponent } from './component/item-list/item-list.component';
import { ItemFormComponent } from './component/item-form/item-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartListPage,
    ItemListPage,
    CartListComponent,
    ItemListComponent,
    ConfirmationComponent,
    LoadingComponent,
    ItemFormComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CartsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ]
})
export class CartsModule { }
