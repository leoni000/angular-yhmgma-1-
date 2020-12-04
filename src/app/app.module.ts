import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ChunksPipe } from './pipes/chunk.pipe';
import { SearchFilter } from './pipes/searchFilter.pipe';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home.component';
import { ProductComponent } from './pages/product.component';
import { CartComponent } from './pages/cart.component';
import { BillChkoutComponent } from './pages/billchkout.component';
import { OrderComponent } from './pages/order.component';

import { SouthComponent } from './pages/menu/southindian.component';
import { NorthComponent } from './pages/menu/northindian.component';
import { ChineseComponent } from './pages/menu/chinese.component';
import { BeverageComponent } from './pages/menu/beverages.component';

import { SubService } from './service/srch.sub.service';
import { ComService } from './service/communication.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Billing&CheckOut', component: BillChkoutComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

const prodRoutes: Routes = [
  { path: 'south-indian', component: SouthComponent },
  { path: 'north-indian', component: NorthComponent },
  { path: 'chinese', component: ChineseComponent },
  { path: 'beverages', component: BeverageComponent },
  { path: 'Products',
    redirectTo: 'Products/southindian',
    pathMatch: 'full'
  },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,
            RouterModule.forRoot( appRoutes, { }),
            RouterModule.forRoot( prodRoutes, { }), 
           
            ],
  declarations: [ AppComponent,ChunksPipe,SearchFilter, HeaderComponent,LoginComponent,HomeComponent, ProductComponent, CartComponent, BillChkoutComponent, LoginComponent, ChineseComponent, SouthComponent, NorthComponent, BeverageComponent, OrderComponent  ],
  providers : [ SubService, ComService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
