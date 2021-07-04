import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Item } from '../../service/model/item.model';

export interface ItemFormData {
  name: string;
  description: string;
  price: number;
  sku: string;
}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
})
export class ItemFormComponent implements OnInit {

  @Input()
  submitTitle: string = 'Create';

  @Input()
  item: Item | undefined;

  @Output() 
  submitEvent = new EventEmitter<ItemFormData>();

  @Output() 
  cancelButtonClickEvent = new EventEmitter<any>();

  ngOnInit(): void {}

  submit(data: FormGroup) {
    if (data.valid) {
      this.submitEvent.emit(data.value);
    }
  }

  cancelClick() {
    this.cancelButtonClickEvent.emit();
  }
}
