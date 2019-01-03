import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductList } from '../model/product-list';
import { ProductService } from '../service/product.service';

declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.html',
  providers: [ProductService]
})
export class HomeComponent implements OnInit, AfterViewInit{
  title = 'e-shopping-cart';
  public productList: ProductList[] = new Array<ProductList>();
  public addedProductList: ProductList[] = new Array<ProductList>();
  private add: string = "";
  private prod: string = "";
  private price: string = "";

  constructor(private service: ProductService, private router: Router) {

   }

   ngOnInit() {

     sessionStorage.setItem("isSuccess","false");
      this.service.fetchProductModelList().subscribe((result) => {
        console.log("Products Results : "+result)
        if(result != null) {
          this.productList = result;
        } else {
          this.productList = new Array<ProductList>();
        }
      }, error => {
        console.log(error);
      });
   }
   
   ngAfterViewInit(){
     $("#user-menu li").each(function() {
        $(this).removeClass("active");
      });

     $("#home").addClass("active");
   }

   addProduct(product: ProductList){debugger;
     this.add =  sessionStorage.getItem("addedList");
     this.add = this.add+product.productNo+"," ;

     this.prod =  sessionStorage.getItem("prodName") !== null ? sessionStorage.getItem("prodName") : "" ;
     this.prod = this.prod+product.name+"," ;

     this.price =  sessionStorage.getItem("priceList") !== null ? sessionStorage.getItem("priceList") : "" ;
     this.price = this.price+product.price+":" ;

     sessionStorage.setItem("addedList",this.add);
     sessionStorage.setItem("prodName",this.prod);
     sessionStorage.setItem("priceList",this.price);

     alert("Product added successfully");

   }

   goToProductCheckout(){
       window.location.href = "product-checkout";
   }

   goToProductAdd() {

     window.location.href = "product";
   }

   goToProductList() {

     window.location.href = "";
   }

}
