import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product = new Product();
  private url = "src/Data/products.json";

  constructor(private httpClient:HttpClient) { }
  
}