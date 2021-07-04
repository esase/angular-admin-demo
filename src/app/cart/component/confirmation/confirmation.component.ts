import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent implements OnInit {
  @Input()
  data: any;

  @Input()
  title: string = '';

  @Output() 
  yesButtonClickEvent = new EventEmitter<any>();

  @Output() 
  noButtonClickEvent = new EventEmitter<any>();

  ngOnInit(): void {}

  yesButtonClick() {
    this.yesButtonClickEvent.emit(this.data);
  }

  noButtonClick() {
    this.noButtonClickEvent.emit(this.data);
  }
}
