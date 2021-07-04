import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-social-auth-buttons',
  templateUrl: './social-auth-buttons.component.html',
})
export class SocialAuthButtonsComponent implements OnInit {
  @Output() 
  socialAuthButtonClickEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  socialAuthButtonClick(type: string) {
    this.socialAuthButtonClickEvent.emit(type);
  }
}
