import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDto } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { BrandlistService } from 'src/app/services/brandlist.service';
import { CarService } from 'src/app/services/car.service';
import { CarbrandlistService } from 'src/app/services/carbrandlist.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: CarDto[] = [];
  colors: Color[] = [];
  brands: Brand[] = [];
  filterCar = '';
  brandId: number = 0;
  colorId: number = 0;
  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandListService: BrandlistService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getColors();
    this.getBrands();
  }

  setBrandId(id: number) {
    this.brandId = id;
    console.log(this.brandId);
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandListService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
}
