import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  mostrarMensagem: boolean = true;
  fonte: number = 12;

  toggleMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  aumentarFonte() {
    this.fonte = this.fonte + 2;
  }

  diminuirFonte() {
    this.fonte = this.fonte - 2;
  }

  alunos = [
    {id: '1', nome: 'Arthur', status: true},
    {id: '2', nome: 'Jean', status: true},
    {id: '3', nome: 'Marcos', status: false

    }
  ];
}