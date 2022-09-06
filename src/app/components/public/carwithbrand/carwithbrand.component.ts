import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarbrandlistService } from 'src/app/services/carbrandlist.service';

@Component({
  selector: 'app-carwithbrand',
  templateUrl: './carwithbrand.component.html',
  styleUrls: ['./carwithbrand.component.css']
})
export class CarwithbrandComponent implements OnInit {
  cars: CarDto[] = [];
  constructor(private carBrandListService:CarbrandlistService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarByBrandId(params["brandId"])
      }
    })
  }

  getCarByBrandId(id: number) {
    this.carBrandListService
      .getCarsDetailsByBrandId(id)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

}
