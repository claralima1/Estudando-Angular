import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FloatLabel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto');
}
