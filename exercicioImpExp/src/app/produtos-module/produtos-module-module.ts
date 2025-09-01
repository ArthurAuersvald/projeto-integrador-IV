import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosModuleRoutingModule } from './produtos-module-routing-module';
import { ListaProdutosComponent } from './lista-produtos-component/lista-produtos-component';


@NgModule({
  declarations: [
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosModuleRoutingModule
  ]
})
export class ProdutosModuleModule { }
