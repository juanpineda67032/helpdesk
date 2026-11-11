import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tickets } from './pages/tickets/tickets'; // <-- Agrega esta línea

@Component({
  imports: [RouterOutlet, Tickets], // <-- Agrega Tickets aquí
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly appName = 'HelpDesk';
}
