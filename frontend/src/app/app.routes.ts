import { Routes } from '@angular/router';
import { Tickets } from './pages/tickets/tickets';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Users } from './pages/users/users';

export const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: Tickets },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'users', component: Users },
  { path: '**', redirectTo: 'tickets' },
];
