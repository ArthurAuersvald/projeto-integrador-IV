import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  mostrarMensagem: boolean = true;

  toggleMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  listaItens = [
    {id: '1', nome: 'Arthur', status: 'Ativo'},
    {id: '2', nome: 'Jean', status: 'Inativo'},
    {id: '3', nome: 'Marcos', status: 'Ativo'}
  ];
}