import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  produtos = [
    {id: '1', nome: 'Arroz', estoque: 10},
    {id: '2', nome: 'Feijao', estoque: 20},
    {id: '3', nome: 'Macarrao', estoque: 0.}
  ]
}
