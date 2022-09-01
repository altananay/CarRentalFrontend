import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/models/carDto';
import { CardetailService } from 'src/services/cardetail.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  cars:CarDto[] = []

  constructor(private carDetailService:CardetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getCarDetailsById(params["id"])
      }
    })
  }

  getCarDetailsById(id:number)
  {
    this.carDetailService.getCarDetailById(id).subscribe(response => {
      this.cars = response.data
    })
  }

}
