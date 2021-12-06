import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeadmModule } from './homeadm/homeadm.module';
import { GestprodModule } from './gestprod/gestprod.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeadmModule,
    GestprodModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
