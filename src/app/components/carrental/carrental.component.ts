import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { Rental } from 'src/app/models/rental';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarrentalService } from 'src/app/services/carrental.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrental',
  templateUrl: './carrental.component.html',
  styleUrls: ['./carrental.component.css']
})
export class CarrentalComponent implements OnInit {

  cars:CarDto[] = []
  rental:Rental = {} as Rental
  errorMessage:string = ""
  constructor(private router:Router, private carDetailService:CardetailService, private carRentalService:CarrentalService, private toastrService:ToastrService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailsById(params["carId"])
      }
    })
  }

  setRentalCarId(carId:number)
  {
    this.rental.carId = carId;
  }

  getCarDetailsById(id:number)
  {
    this.carDetailService.getCarDetailById(id).subscribe(response => {
      this.cars = response.data
    })
  }

  addRental()
  {
    this.rental.customerId = 3;
    this.carRentalService.addRental(this.rental).subscribe({next: response => {
      this.toastrService.success(response.message + " Ödeme sayfasına yönlendiriliyor.")
      this.routeCreditCardPayment(this.rental.carId)
    }, error: error => {
      this.toastrService.error(error.error.message)
    }})
  }

  routeCreditCardPayment(carId:number)
  {
    this.router.navigate([`/car/carrental/payment/`, carId])
  }
}
