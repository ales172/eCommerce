import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../Services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = new Array<Product>();
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.GetList();
    
  }
  GetList():void{
    this.productService.GetProducts().subscribe((productsResponse:Product[])=>{
      this.products = productsResponse;
    });
  }

  DeleteProduct(id:number)
  {
    this.productService.DeleteProduct(id).subscribe((resp) => {
      this.productService.GetProducts().subscribe((productsResponse:Product[]) =>{
        this.products = productsResponse;
      })
    })
  }
}
