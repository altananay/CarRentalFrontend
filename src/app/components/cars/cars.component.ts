import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/models/carDto';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:CarDto[] = []

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
