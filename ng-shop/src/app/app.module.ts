import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import {ProductService} from "./shared/services/product.service";
import { HomeComponent } from './home';
import { ProductTileComponent } from './home';
import { ProductComponent, ProductDetailsComponent } from './product';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
