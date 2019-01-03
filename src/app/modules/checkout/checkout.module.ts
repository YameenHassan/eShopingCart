import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './component/checkout.component';
import { SubmitComponent } from './component/submit.component';


@NgModule ({
	imports: [
   		CommonModule,
    	FormsModule,
      ReactiveFormsModule,
      HttpModule,
			HttpClientModule

   	],
	declarations: [
		CheckoutComponent,
		SubmitComponent
	],
	exports: [
    CheckoutComponent,
		SubmitComponent
	]
})

export class CheckoutModule {}
