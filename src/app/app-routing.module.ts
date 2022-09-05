import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandlistComponent } from './components/brandlist/brandlist.component';
import { CarbrandlistComponent } from './components/carbrandlist/carbrandlist.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { CarrentalComponent } from './components/carrental/carrental.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarwithbrandComponent } from './components/carwithbrand/carwithbrand.component';
import { CarwithcolorComponent } from './components/carwithcolor/carwithcolor.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component: CarsComponent},
  {path:"cars/brand/:brandId", component:CarbrandlistComponent},
  {path:"cars/brand", component:BrandlistComponent},
  {path: "car/:carId", component: CardetailsComponent},
  {path: "cars/colors/:colorId", component:CarwithcolorComponent},
  {path: "cars/brands/:brandId", component:CarwithbrandComponent},
  {path: "car/carrental/:carId", component:CarrentalComponent},
  {path: "car/carrental/payment/:carId", component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
