import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

class Role
{
  role: string = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
}

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  
  userName: string;

  constructor() {}

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
    const token = localStorage.getItem('token')?.toString()
    const decodedToken = helper.decodeToken(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
    this.userName = decodedToken;
  }
}
