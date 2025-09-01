import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing-module';
import { Soma } from './soma/soma';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ContadorRoutingModule,
    Soma
  ]
})
export class ContadorModule { }
