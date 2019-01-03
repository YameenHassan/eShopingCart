import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home.component';


@NgModule ({
	imports: [
   		CommonModule,
    	FormsModule,
      ReactiveFormsModule,
      HttpModule,
			HttpClientModule

   	],
	declarations: [
		HomeComponent
	],
	exports: [
    HomeComponent
	]
})

export class HomeModule {}
