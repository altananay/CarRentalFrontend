import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:7269/api/auth/"

  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel)
  {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login",user)
  }

  register(user:RegisterModel)
  {
    return this.httpClient.post<SingleResponseModel<RegisterModel>>(this.apiUrl + "register", user);
  }

  isAuthenticated()
  {
    if (localStorage.getItem("token")) {
      return true
    }
    else
    {
      return false
    }
  }

}
