import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/component/home.component';
import { CheckoutComponent } from './modules/checkout/component/checkout.component';
import { ViewCartComponent } from './modules/view-cart/component/view-cart.component';
import { SubmitComponent } from './modules/checkout/component/submit.component';


const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'product-checkout', component: CheckoutComponent },
  { path: 'view-cart', component: ViewCartComponent },
  { path: 'submit', component: SubmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
