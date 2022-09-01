import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarsComponent } from './components/cars/cars.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandlistComponent } from './components/brandlist/brandlist.component';
import { CarbrandlistComponent } from './components/carbrandlist/carbrandlist.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarsComponent,
    BrandsComponent,
    BrandlistComponent,
    CarbrandlistComponent,
    CardetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
