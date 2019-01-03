import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewCartComponent } from './component/view-cart.component';


@NgModule ({
	imports: [
   		CommonModule,
    	FormsModule,
      ReactiveFormsModule,
      HttpModule,
			HttpClientModule

   	],
	declarations: [
		ViewCartComponent
	],
	exports: [
    ViewCartComponent
	]
})

export class ViewCartModule {}
