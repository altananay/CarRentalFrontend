import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class CarrentalService {

  rental:Rental[] = []

  apiUrl = "https://localhost:7269/api/"

  constructor(private httpClient:HttpClient) { }

  addRental(rental:Rental):Observable<any>
  {
    let newApiUrl = this.apiUrl + "rentals/add"
    return this.httpClient.post<any>(newApiUrl, rental);
  }
}
