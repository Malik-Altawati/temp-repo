import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CATALOGUE } from '../../../shared/mock-data/catalogue-produits';
@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css'],
})
export class HomeProductsComponent implements OnInit {
  title = 'PRODUITS';
  produits;
  selected = {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzs32Uq8r3JrGXjvogJmoMb7h-KW0YU79hg&usqp=CAU',
  };
  constructor(private productService: ProductService) {}

  getProducts(): void {
    this.produits = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
  // onDetail(prod) {
  //   alert(prod.description);
  // }
  select(prod) {
    this.selected = prod;
  }
}
