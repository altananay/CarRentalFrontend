import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  
  userName: string;
  email : string;
  constructor(private localStorageService:LocalStorageService, private router:Router, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getUserInformation();
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getUserInformation() {
    const helper = new JwtHelperService();
    const token = this.localStorageService.getFromLocalStorage("token");
    const decodedName = helper.decodeToken(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
    const decodedEmail = helper.decodeToken(token)["email"]
    this.userName = decodedName;
    this.email = decodedEmail;
  }


  logOut()
  {
    this.localStorageService.deleteLocalStorage("token");
    this.toastrService.info("Çıkış yaptınız. Anasayfaya yönlendirildiniz.");
    this.router.navigate(["/cars"]);
  }

}
