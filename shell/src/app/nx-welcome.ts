import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule,CardModule,ButtonModule],
  template: `
<div class="grid grid-cols-6 gap-4">
  <div class=" col-span-4 col-start-2">01</div>
  <div class="col-start-1 col-end-3">02</div>
  <div class=" col-span-2 col-end-7">03</div>
  <div class=" col-start-1 col-end-7">04</div>
</div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
