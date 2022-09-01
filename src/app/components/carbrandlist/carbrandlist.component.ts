import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/models/brand';
import { CarDto } from 'src/models/carDto';
import { BrandlistService } from 'src/services/brandlist.service';
import { CarbrandlistService } from 'src/services/carbrandlist.service';

@Component({
  selector: 'app-carbrandlist',
  templateUrl: './carbrandlist.component.html',
  styleUrls: ['./carbrandlist.component.css']
})
export class CarbrandlistComponent implements OnInit {

  brandList:Brand[] = []
  carList:CarDto[] = []
  constructor(private brandListService:BrandlistService, private carBrandListService:CarbrandlistService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrands();
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])
      }
      else
      {
        this.getCars();
      }
    })
  }

  getBrands()
  {
    this.brandListService.getBrands().subscribe(response => {
      this.brandList = response.data
    })
  }

  getCars()
  {
    this.carBrandListService.getCars().subscribe(response => {
      this.carList = response.data;
    })
  }

  getCarsByBrandId(brandId:number)
  {
    this.carBrandListService.getCarsDetailsByBrandId(brandId).subscribe(response => {
      this.carList = response.data;
    })
  }

}
