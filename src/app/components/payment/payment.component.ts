import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { Payment } from 'src/app/models/payment';
import { CardetailService } from 'src/app/services/cardetail.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cars:CarDto[] = []
  payment:Payment = {} as Payment
  constructor(private carDetailService:CardetailService, private paymentService:PaymentService, private toastrService:ToastrService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailsById(params["carId"])
      }
    })
  }

  getCarDetailsById(id:number)
  {
    this.carDetailService.getCarDetailById(id).subscribe(response => {
      this.cars = response.data
    })
  }

  getPayment()
  {
    console.log(this.payment.number)
    this.paymentService.getPayment(this.payment).subscribe({next: response => {
      this.toastrService.success(response.message)
    }, error: error => {
      this.toastrService.error(error.error.message)
    }})
  }

}
