import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDto } from 'src/app/models/carDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:7269/api/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDto>>
  {
    let newApiUrl = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newApiUrl);
  }

  getCarByColorId(id:number):Observable<ListResponseModel<CarDto>>
  {
    let newApiUrl = this.apiUrl + "cars/getcardetailsbycolorid?colorId=" + id;
    return this.httpClient.get<ListResponseModel<CarDto>>(newApiUrl)
  }
}