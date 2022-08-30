import { Component, OnInit } from '@angular/core';
import { Car } from 'src/models/car';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:Car[] = []

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars()
  {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }

}
