import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cart } from '../../service/model/cart.model';
import { Item } from '../../service/model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input()
  cart: Cart | undefined;

  @Input()
  items: Item[] = [];

  @Output() 
  createItemButtonClickEvent = new EventEmitter<string>();

  @Output() 
  editItemButtonClickEvent = new EventEmitter<string>();

  @Output() 
  deleteItemButtonClickEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  createItemButtonClick() {
    this.createItemButtonClickEvent.emit();
  }

  editItemButtonClick(id: string) {
    this.editItemButtonClickEvent.emit(id);
  }

  deleteItemButtonClick(id: string) {
    this.deleteItemButtonClickEvent.emit(id);
  }
}
