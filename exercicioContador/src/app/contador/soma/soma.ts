import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  standalone: true,
  templateUrl: './soma.html',
  styleUrls: ['./soma.css']
})
export class Soma {
  valor = 0;
  incrementar() {
    this.valor += 1;
  }
}