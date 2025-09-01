import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  alunos = [
    { id: 1, nome: 'Jean', ativo: true },
    { id: 2, nome: 'Arthur', ativo: false },
    { id: 3, nome: 'Marcos', ativo: true },
    { id: 4, nome: 'Emanuel', ativo: false }
  ];

  mostrarLista = true;
  fontSize = 16;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  aumentarFonte() {
    this.fontSize += 2;
  }

  diminuirFonte() {
    if (this.fontSize > 8) this.fontSize -= 2;
  }
}

