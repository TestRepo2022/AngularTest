import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './Header/Header.Component';
import { FormsModule } from '@angular/forms';
import { GenderformatPipe } from './utils/pipes/genderformat.pipe';
import { NameformatPipe } from './utils/pipes/nameformat.pipe';
import { FilterpipePipe } from './utils/pipes/filterpipe.pipe';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { HelpComponent } from './pages/help/help.component';
import { MobilerechargeComponent } from './pages/service/mobilerecharge/mobilerecharge.component';
import { DthrechargeComponent } from './pages/service/dthrecharge/dthrecharge.component';
import { MoneytransferComponent } from './pages/service/moneytransfer/moneytransfer.component';
import { TrainbookingComponent } from './pages/service/trainbooking/trainbooking.component';
import { ProductlistComponent } from './pages/products/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HeaderComponent,
    GenderformatPipe,
    NameformatPipe,
    FilterpipePipe,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    HelpComponent,
    MobilerechargeComponent,
    DthrechargeComponent,
    MoneytransferComponent,
    TrainbookingComponent,
    ProductlistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
