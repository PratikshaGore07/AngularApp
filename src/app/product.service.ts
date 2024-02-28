import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpclient:HttpClient) {

  }
  saveProduct(product:Product){
  return this.httpclient.post("http://localhost:8080/saveProduct" , product)
  }
}

export class Product{

 productid:number;
 productname:string;
 productprice:number;
 category:string;
 
 public constructor(productid:number,productname:string,productprice:number,category:string)
 {
   this.productid=productid;
   this.productname=productname;
   this.productprice=productprice;
   this.category=category;
   
 }
}