import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule,
    RouterModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
