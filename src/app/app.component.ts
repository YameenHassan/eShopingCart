import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-shopping-cart';
  public success: string = 'false'; //sessionStorage.getItem("isSuccess");

  ngOnInit(){ }

  goToCart() {
    sessionStorage.setItem("isSuccess", 'false');
    this.success = sessionStorage.getItem("isSuccess");
    window.location.href = "view-cart";

  }

  goToProductList() {
    sessionStorage.setItem("isSuccess", 'false');
    this.success = sessionStorage.getItem("isSuccess");
    window.location.href = "";

  }

  goToProductCheckout(){
    sessionStorage.setItem("isSuccess", 'false');
    this.success = sessionStorage.getItem("isSuccess");
    window.location.href = "product-checkout";
  }

  clearSelection(){
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "";
  }
}
