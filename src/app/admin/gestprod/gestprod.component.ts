import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-gestprod',
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css'],
})
export class GestprodComponent implements OnInit {
  nameControl;

  productTitle = 'miral';
  productDescription = 'miral';
  productPrice = 'miral';
  productImage = 'miral';
  productCategory = 'miral';

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {}

  onSubmit(value) {
    this.ProductService.addProduct(value);
  }
}
