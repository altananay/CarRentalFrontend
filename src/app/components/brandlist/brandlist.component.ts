import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/models/brand';
import { BrandlistService } from 'src/services/brandlist.service';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit {

  brandList:Brand[] = []

  constructor(private brandListService:BrandlistService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandListService.getBrands().subscribe(response => {
      this.brandList = response.data
    })
  }

}
