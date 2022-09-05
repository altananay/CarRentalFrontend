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
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarwithbrandComponent } from './components/carwithbrand/carwithbrand.component';
import { CarwithcolorComponent } from './components/carwithcolor/carwithcolor.component';
import { CarrentalComponent } from './components/carrental/carrental.component';
import { PaymentComponent } from './components/payment/payment.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarsComponent,
    BrandsComponent,
    BrandlistComponent,
    CarbrandlistComponent,
    CardetailsComponent,
    FilterPipePipe,
    CarwithbrandComponent,
    CarwithcolorComponent,
    CarrentalComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
