/*
* File: app.routes.ts
* Author: Nagy Áron
* Copyright: 2026, Nagy Áron
* Group: Szoft II/N
* Date: 2026-10-12
* Github: https://github.com/lopnifox/
* Licenc: MIT
*/

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Rombatlo } from './pages/rombatlo/rombatlo';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'rombatlo', component: Rombatlo },
  { path: '**', redirectTo: 'home' }
];