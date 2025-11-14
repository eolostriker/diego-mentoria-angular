import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { SobreMim } from './sobre-mim/sobre-mim';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, SobreMim],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mentoria-angular');
}
