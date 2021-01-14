import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  //private url="http://localhost:3000/products";
  private url="https://localhost:44348/api/Products";
  constructor(private httpRequest: HttpClient) { }

  
  GetProducts() : Observable<Product[]>
  { 
    console.log(this.httpRequest.get<Product[]>(this.url));
    return this.httpRequest.get<Product[]>(this.url);
  }

  GetProduct(id:number) : Observable<Product>
  { 
    console.log("Product Service: "+id);
    return this.httpRequest.get<Product>(this.url+"/"+id);
  }

  SaveProduct(newProduct: Product)
  {  
    console.log(newProduct);
    this.httpRequest.post<Product>(this.url,newProduct).subscribe(
      (res) =>{console.log(res)}
    );
  }

  DeleteProduct(id:number)
  {
    return this.httpRequest.delete(`${this.url}/${id}`);
  }

  EditProduct(productEdited: Product) : Observable<Product>
  {  
    
    console.log(`${this.url}/${productEdited.productId}`);
    return this.httpRequest.put<Product>(`${this.url}/${productEdited.productId}`, productEdited);
  } 
}
