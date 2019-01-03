import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'submit',
  templateUrl: './submit.html'
})
export class SubmitComponent implements OnInit{

  public name : string;
  public email : string;
  public address : string;
  public city : string;
  public state : string;
  public zipCode : string;

   constructor(private router: Router) {
     sessionStorage.clear();
   }

  ngOnInit(){

    this.name = localStorage.getItem("name");
    this.email = localStorage.getItem("email");
    this.address = localStorage.getItem("address");
    this.city = localStorage.getItem("city");
    this.state = localStorage.getItem("state");
    this.zipCode = localStorage.getItem("zipCode");
  }


}
