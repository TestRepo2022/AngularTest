import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { CustomerComponent } from './customer/customer.component';
import { HelpComponent } from './pages/help/help.component';
import { TrainbookingComponent } from './pages/service/trainbooking/trainbooking.component';
import { MobilerechargeComponent } from './pages/service/mobilerecharge/mobilerecharge.component';
import { DthrechargeComponent } from './pages/service/dthrecharge/dthrecharge.component';
import { MoneytransferComponent } from './pages/service/moneytransfer/moneytransfer.component';
import { ProductlistComponent } from './pages/products/productlist/productlist.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Products',component:ProductsComponent,
    children:[
      {path:'', component:ProductlistComponent},
      {path:'ProductList/:id',component:ProductlistComponent}
    ]
  },
  {path:'Services',component:ServicesComponent,
children:[
  {path:'train-booking',component:TrainbookingComponent},
  {path:'mobile-recharge',component:MobilerechargeComponent},
  {path:'dth-recharge',component:DthrechargeComponent},
  {path:'money-transfer',component:MoneytransferComponent},
  {path:'',component:TrainbookingComponent}

]

  },
  {path:'Customers',component:CustomerComponent},
  {path:'Help',component:HelpComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
