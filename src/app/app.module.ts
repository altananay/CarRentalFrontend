import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './components/admin/admin/admin.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { PublicComponent } from './components/public/public/public.component';
import { CarsComponent } from './components/public/cars/cars.component';
import { NaviComponent } from './components/public/navi/navi.component';
import { BrandsComponent } from './components/public/brands/brands.component';
import { BrandlistComponent } from './components/public/brandlist/brandlist.component';
import { CarbrandlistComponent } from './components/public/carbrandlist/carbrandlist.component';
import { CardetailsComponent } from './components/public/cardetails/cardetails.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarwithbrandComponent } from './components/public/carwithbrand/carwithbrand.component';
import { CarwithcolorComponent } from './components/public/carwithcolor/carwithcolor.component';
import { PaymentComponent } from './components/public/payment/payment.component';
import { CarrentalComponent } from './components/public/carrental/carrental.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { AddColorComponent } from './components/admin/add-color/add-color.component';
import { UpdateColorComponent } from './components/admin/update-color/update-color.component';
import { ListColorComponent } from './components/admin/list-color/list-color.component';

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
    PaymentComponent,
    AdminComponent,
    SidebarComponent,
    PublicComponent,
    NavbarComponent,
    AddColorComponent,
    UpdateColorComponent,
    ListColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
