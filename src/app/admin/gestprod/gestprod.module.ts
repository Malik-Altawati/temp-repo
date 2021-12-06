import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GestprodComponent],
  imports: [CommonModule, GestprodRoutingModule, FormsModule],
  exports: [GestprodComponent],
})
export class GestprodModule {}
