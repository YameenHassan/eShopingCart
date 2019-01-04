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


  clearSelection(){
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "";
  }
}
