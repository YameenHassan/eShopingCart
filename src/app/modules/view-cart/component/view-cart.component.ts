import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductList } from '../../home/model/product-list';
import { ProductService } from '../../home/service/product.service';

declare var $: any;

@Component({
  selector: 'view-cart',
  templateUrl: './view-cart.html',
  providers: [ProductService]
})
export class ViewCartComponent implements OnInit, AfterViewInit{
  public cartList: ProductList[] = new Array<ProductList>();
  private list: any[];
  private nameList: any[];
  private priceList: any[];

  constructor(private service: ProductService, private router: Router) { }

   ngOnInit() {

     let add = sessionStorage.getItem("addedList");
     
     if(add !== null){
         add = add.slice(0, add.length-1);
         this.list = add.split(",");

         let name = sessionStorage.getItem("prodName");
         name = name.slice(0, name.length-1);
         this.nameList = name.split(",");

         let price = sessionStorage.getItem("priceList");
         price = price.slice(0, price.length-1);
         this.priceList = price.split(":");

         this.service.fetchProductModelList().subscribe((result) => {
             console.log("Products Cart : "+result)
             if(result != null) {
               for (var i = 0; i < this.list.length; i++) {
                 for (var j = 0; j < result.length; j++) {
                   if(result[j].productNo == this.list[i]){
                     this.cartList.push(result[i])
                   }
                 }
               }
             } else {
               this.cartList = new Array<ProductList>();
             }
           }, error => {
             console.log(error);
         });

       }

    }

     ngAfterViewInit() {
        $("#user-menu li").each(function() {
           $(this).removeClass("active");
         });


         $("#cart").addClass("active");

       }


  deleteProduct(product: ProductList){
    this.list.splice(this.list.indexOf(product.productNo), 1);
    this.nameList.splice(this.nameList.indexOf(product.name), 1);
    this.priceList.splice(this.priceList.indexOf(product.price), 1);

    this.cartList.splice(this.cartList.indexOf(product), 1);
    let id = "";
    let name = "";
    let price = "";
    for (var i = 0; i < this.list.length; i++) {
      id = id+this.list[i]+",";
      name = name+this.nameList[i]+",";
      price = price+this.priceList[i]+",";
    }
    sessionStorage.setItem("addedList", id);
    sessionStorage.setItem("prodName", name);
    sessionStorage.setItem("priceList", price);
  }

}
