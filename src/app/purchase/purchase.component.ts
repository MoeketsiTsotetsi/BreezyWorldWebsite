import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private _productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(result =>{
      this.products = result
    },error =>{
      console.log(error);
      
    });
  }

  getProduct(){
    alert()
  }

}
