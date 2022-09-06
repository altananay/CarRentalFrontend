import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddColorComponent } from './components/admin/add-color/add-color.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { BrandlistComponent } from './components/public/brandlist/brandlist.component';
import { CarbrandlistComponent } from './components/public/carbrandlist/carbrandlist.component';
import { CardetailsComponent } from './components/public/cardetails/cardetails.component';
import { CarrentalComponent } from './components/public/carrental/carrental.component';
import { CarsComponent } from './components/public/cars/cars.component';
import { CarwithbrandComponent } from './components/public/carwithbrand/carwithbrand.component';
import { CarwithcolorComponent } from './components/public/carwithcolor/carwithcolor.component';
import { PaymentComponent } from './components/public/payment/payment.component';
import { PublicComponent } from './components/public/public/public.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'addcolor', component: AddColorComponent }],
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'car/:carId',
        component: CardetailsComponent,
      },
      { path: 'cars', component: CarsComponent },
      { path: 'cars/brand/:brandId', component: CarbrandlistComponent },
      { path: 'cars/brand', component: BrandlistComponent },
      { path: 'cars/colors/:colorId', component: CarwithcolorComponent },
      { path: 'cars/brands/:brandId', component: CarwithbrandComponent },
      { path: 'car/carrental/:carId', component: CarrentalComponent },
      { path: 'car/carrental/payment/:carId', component: PaymentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
