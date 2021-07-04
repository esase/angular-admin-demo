import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cart } from '../../service/model/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input()
  carts: Cart[] = [];

  @Output() 
  createCartButtonClickEvent = new EventEmitter<string>();

  @Output() 
  deleteCartButtonClickEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  createCartButtonClick() {
    this.createCartButtonClickEvent.emit();
  }

  deleteCartButtonClick(id: string) {
    this.deleteCartButtonClickEvent.emit(id);
  }
}
