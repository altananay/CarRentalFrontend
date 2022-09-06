import { Component, OnInit } from '@angular/core';
import { BrandDto } from 'src/app/models/brandDto';
import { BrandImageService } from 'src/app/services/brandimages.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands:BrandDto[] = []



  constructor(private brandImageService:BrandImageService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandImageService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }

}
