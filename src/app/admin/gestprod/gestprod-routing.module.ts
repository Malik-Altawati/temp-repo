import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class GestprodRoutingModule {}
