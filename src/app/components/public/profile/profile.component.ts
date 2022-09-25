import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User = {} as User
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["email"]) {
        this.getUserByEmail(params["email"])
      }
    })
  }

  getUserByEmail(email: string)
  {
    this.userService.getUserByEmail(email).subscribe({next: response => {
      this.user = response.data
      console.log(this.user);
    }})
  }

}
