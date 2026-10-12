/*
* File: rombatlo.ts
* Author: Nagy Áron
* Copyright: 2026, Nagy Áron
* Group: Szoft II/N
* Date: 2026-10-12
* Github: https://github.com/lopnifox/
* Licenc: MIT
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rombatlo',
  imports: [FormsModule],
  templateUrl: './rombatlo.html',
  styleUrl: './rombatlo.css'
})
export class Rombatlo {
  diagonalA: number = 0;
  diagonalB: number = 0;
  area: number = 0;

  calculateArea() {
  if (this.diagonalA <= 0 || this.diagonalB <= 0) {
    alert('Mindkét átlónak pozitív számnak kell lennie!');
    this.area = 0;
    return;
  }

  this.area = this.diagonalA * this.diagonalB / 2;
}
}