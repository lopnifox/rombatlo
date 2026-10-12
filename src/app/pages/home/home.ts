/*
* File: home.ts
* Author: Nagy Áron
* Copyright: 2026, Nagy Áron
* Group: Szoft II/N
* Date: 2026-10-12
* Github: https://github.com/lopnifox/
* Licenc: MIT
*/

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}