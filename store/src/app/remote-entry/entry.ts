import { Component } from '@angular/core';
import { Home } from '../home/home';

@Component({
  imports: [Home],
  selector: 'app-store-entry',
  template: `<app-home></app-home>`,
})
export class RemoteEntry {}
