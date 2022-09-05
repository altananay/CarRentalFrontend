import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandDto } from 'src/app/models/brandDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandImageService {

  apiUrl = "https://localhost:7269/api/brands/getbrandimages"



  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<BrandDto>>
  {
    return this.httpClient.get<ListResponseModel<BrandDto>>(this.apiUrl);
  }
}
