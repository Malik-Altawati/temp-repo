import { Injectable } from '@angular/core';
import { CATALOGUE } from '../shared/mock-data/catalogue-produits';
import { Produit } from '../shared/models/produit';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = CATALOGUE;

  constructor(private router: Router) {}
  getProducts(): Produit[] {
    return this.products;
  }

  addProduct(prod) {
    this.products.unshift(prod);
    console.log(this.products);
    this.router.navigateByUrl('/');
  }
}
