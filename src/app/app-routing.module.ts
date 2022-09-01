import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandlistComponent } from './components/brandlist/brandlist.component';
import { CarbrandlistComponent } from './components/carbrandlist/carbrandlist.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component: CarsComponent},
  {path:"cars/brand/:brandId", component:CarbrandlistComponent},
  {path:"cars/brand", component:BrandlistComponent},
  {path: "cars/:id", component: CardetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
