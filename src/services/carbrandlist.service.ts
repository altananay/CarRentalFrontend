import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from 'src/models/carDto';
import { ListResponseModel } from 'src/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarbrandlistService {

  apiUrl = "https://localhost:7269/api/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDto>>
  {
    let newApiUrl = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<CarDto>>(newApiUrl)
  }

  getCarsDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDto>>
  {
    let newApiUrl = this.apiUrl + "cars/getcardetailsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newApiUrl);
  }
}
