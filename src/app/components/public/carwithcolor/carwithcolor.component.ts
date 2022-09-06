import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carwithcolor',
  templateUrl: './carwithcolor.component.html',
  styleUrls: ['./carwithcolor.component.css']
})
export class CarwithcolorComponent implements OnInit {

  cars:CarDto[] = []
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        this.getCarByColorId(params["colorId"])
      }
    })
  }

  getCarByColorId(id:number)
  {
    this.carService.getCarByColorId(id).subscribe(response => {
      this.cars = response.data;
    })
  }

}
