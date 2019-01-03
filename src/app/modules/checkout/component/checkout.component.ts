import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Router} from '@angular/router';
import { ProductList } from '../../home/model/product-list';
import { ProductService } from '../../home/service/product.service';
declare var $: any;

@Component({
  selector: 'checkout',
  templateUrl: './checkout.html',
  providers: [ProductService]
})
export class CheckoutComponent implements OnInit, AfterViewInit{
  public ckList: ProductList[] = new Array<ProductList>();
  private nameList: any[];
  private priceList: any[];
  private prod: ProductList;
  private total: number= 0;
  private itemCount = 0;

  public name : string;
  public email : string;
  public address : string;
  public city : string;
  public state : string;
  public zipCode : string;


  constructor(private service: ProductService, private router: Router) {

   }


   ngOnInit() {

     let name = sessionStorage.getItem("prodName");
     if(name !== null){
         name = name.slice(0, name.length-1);
         this.nameList = name.split(",");

         let price = sessionStorage.getItem("priceList");
         price = price.slice(0, price.length-1);
         this.priceList = price.split(":");

         let a = "";
         for (let i = 0; i < this.nameList.length; i++) {
             this.prod = new ProductList();
             this.prod.name = this.nameList[i];
             this.prod.price = this.priceList[i];
             this.ckList.push(this.prod);

             a = this.priceList[i].replace('₹','');
             var find = ',';
             var re = new RegExp(find, 'g');
             a = a.replace(re,'');

             this.total = this.total+ +a;
         }
         this.itemCount = this.ckList.length;
       }
   }

  ngAfterViewInit(){
    $("#user-menu li").each(function() {
       $(this).removeClass("active");
     });

    $("#checkout").addClass("active");
  }

  checkout(){
    sessionStorage.setItem("isSuccess","true");

    localStorage.setItem("name", this.name);
    localStorage.setItem("email", this.email);
    localStorage.setItem("address", this.address);
    localStorage.setItem("city", this.city);
    localStorage.setItem("state", this.state);
    localStorage.setItem("zipCode", this.zipCode);

    window.location.href = "submit";
  }

}
