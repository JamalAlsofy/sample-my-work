import { Component } from '@angular/core';
import { Home } from '../home/home';

@Component({
  imports: [Home],
  selector: 'app-merchant-entry',
  template: `<app-home></app-home>`,
})
export class RemoteEntry {}
