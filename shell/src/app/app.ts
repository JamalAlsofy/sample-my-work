import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { PrimengImportsModule } from '@realworld/lib/cdnlib/ui-primeng-import';


@Component({
  imports: [NxWelcome,PrimengImportsModule, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shell';
}
