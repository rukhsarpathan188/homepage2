import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//calling service to store all the properties
//all property coming from any will be saved inside productList

    //inject api service

    productList:any[]=[];
    constructor(private api : ApiService, private cartService : CartService) { }


  //making api call inside ngonit
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      //this.productList=res;
      console.log(res);
      this.productList=res as any;


      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
   //after triggering on art to cart it should perform operation
   addtocart(item:any){
    this.cartService.addtoCart(item);
  }
}
