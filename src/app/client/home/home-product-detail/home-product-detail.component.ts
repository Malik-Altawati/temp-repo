import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css'],
})
export class HomeProductDetailComponent implements OnInit {
  @Input() msg: any;
  constructor() {}

  ngOnInit(): void {}
}
