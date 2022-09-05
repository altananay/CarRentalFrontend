import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = "https://localhost:7269/api/"

  constructor(private httpClient:HttpClient) { }

  getPayment(payment:Payment):Observable<ListResponseModel<Payment>>
  {
    let newApiUrl = this.apiUrl + "FakePayment/getall"
    return this.httpClient.post<ListResponseModel<Payment>>(newApiUrl, payment);
  }
}
