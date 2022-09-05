import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from 'src/app/models/carDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl = "https://localhost:7269/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetailById(id:number):Observable<ListResponseModel<CarDto>>
  {
    let newApiUrl = this.apiUrl + "cars/getcardetailsbyid?id=" + id
    return this.httpClient.get<ListResponseModel<CarDto>>(newApiUrl);
  }
}
