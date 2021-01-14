import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../Services/product.service';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  mainProductsForm:FormGroup;
  newProduct: Product = new Product();
  productId;
  editBtn: boolean = false;
  saveBtn: boolean = true;

  constructor(private productService:ProductService, 
              private formBuilder:FormBuilder,
              private activeRoute:ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.params.productId;

    this.mainProductsForm = this.formBuilder.group({
      productCode:["",new FormControl(Validators.required,Validators.minLength(2))],
      productName:["",Validators.required],
      productPrice:["",Validators.required],
      productImage:[""],
      productDescripcion:["",Validators.required],
      productStock:["",Validators.required],
      id:[""]
    })

    if(this.productId != 0)
    {
      this.saveBtn = false;
      this.editBtn = true;
      this.FormEditProduct(this.productId);
    }
  }


  saveNewProduct()
  {
    this.newProduct = this.mainProductsForm.value as Product;
    this.productService.SaveProduct(this.newProduct); 
    this.mainProductsForm.reset();
  }

   FormEditProduct(id:number)
   {
      this.productService.GetProduct(id).subscribe((productResponse:Product) =>{
        this.newProduct = productResponse;
        this.mainProductsForm.patchValue(productResponse);
        console.log("Product: "+productResponse);
      });
      

   }

   EditProduct()
   {
      this.newProduct = this.mainProductsForm.value as Product;
      console.log("ID: "+this.newProduct.productId);
      console.log("Description: "+this.newProduct.productDescripcion);
      console.log("Name: "+this.newProduct.productName);
      console.log("Image: "+this.newProduct.productImage);
      console.log("Price: $"+this.newProduct.productPrice);
      console.log("Stock: "+this.newProduct.productStock);
      this.productService.EditProduct(this.newProduct).subscribe((productResponse)=>{
        this.router.navigate(["products"]);
      });
      this.mainProductsForm.reset();
   }
}
