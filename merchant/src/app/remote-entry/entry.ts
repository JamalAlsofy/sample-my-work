import { Component } from '@angular/core';
import { NxWelcome } from './nx-welcome';
import { Home } from '../home/home';

@Component({
  imports: [Home],
  selector: 'app-merchant-entry',
  template: `<app-home></app-home>`,
})
export class RemoteEntry {}
