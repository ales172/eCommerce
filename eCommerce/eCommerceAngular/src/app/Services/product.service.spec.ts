import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product = new Product();
  private url = "src/Data/products.json";

  constructor(private httpRequest:HttpClient) { }
  
  GetProducts() : Observable<Product[]>
  {
    return this.httpRequest.get<Product[]>(this.url);
  }

  SaveProduct(newProduct: Product)
  {
    this.httpRequest.post<Product>(this.url, newProduct);
  }
}