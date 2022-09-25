import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SingleResponseModel from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:7269/api/"

  getUserByEmail(email: string) : Observable<SingleResponseModel<User>>
  {
    let newApiUrl = this.apiUrl + "users/getbyemail?email=" + email
    return this.httpClient.get<SingleResponseModel<User>>(newApiUrl);
  }

}
