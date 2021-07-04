import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../../service/item.service';
import { Item } from '../../service/model/item.model';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { Cart } from '../../service/model/cart.model';
import { ActivatedRoute } from '@angular/router';
import { ItemFormData } from '../../component/item-form/item-form.component';

@Component({
  selector: 'app-item-list-page',
  templateUrl: './item-list-page.html',
})
export class ItemListPage implements OnInit {
  cart: Cart;
  itemList$: Observable<Item[]>;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService,
  ) {
    this.cart = this.route.snapshot.data.cart;
    this.itemList$ = this.itemService.getItems(this.cart.id);
  }

  ngOnInit(): void {}

  async createItem(data: ItemFormData) {
    await this.itemService.createItem(this.cart.id, data);
    this.toastrService.success('', 'Item created');
  }

  async editItem(itemId: string, data: ItemFormData) {
    await this.itemService.updateItem(itemId, data);
    this.toastrService.success('', 'Item updated');
  }

  async showCreationFormDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  async showEditFormDialog(itemId: string, dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: await this.itemService.getItem(itemId),
    });
  }

  async showConfirmationDialog(itemId: string, dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: itemId,
   });
  }

  async deleteItem(itemId: string) {
    await this.itemService.deleteItem(itemId);
    this.toastrService.success('', 'Item deleted');
  }
}
