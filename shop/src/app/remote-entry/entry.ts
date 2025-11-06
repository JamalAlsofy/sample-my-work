import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from '../home/home';

@Component({
  imports: [Home, RouterModule],
  selector: 'app-shop-entry',
  template: `<app-home></app-home>`,
})
export class RemoteEntry { }
