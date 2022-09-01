import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/models/listResponseModel';
import { CarDto } from 'src/models/carDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:7269/api/cars/getcardetails"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDto>>
  {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl);
  }
}