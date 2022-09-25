import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeCar();
  }

  routeCar()
  {
    if (this.router.url === "/") {
      this.router.navigate(["/cars"])
    }
    console.log(this.router.url);
  }

}