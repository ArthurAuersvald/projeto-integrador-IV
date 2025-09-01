import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  produtos = [
    {nome: 'Arroz', valor: 40, estoque: 10},
    {nome: 'Feijao', valor: 15, estoque: 20},
    {nome: 'Macarrao', valor: 10, estoque: 0.}
  ]
  
  aumentarValor() {
    this.produtos.forEach(produto => {
      produto.valor = produto.valor * 1.10;
    });
  }

  diminuirValor() {
    this.produtos.forEach(produto => {
      produto.valor = produto.valor * 0.90;
    });
  }
}
