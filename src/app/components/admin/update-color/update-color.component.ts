import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.css'],
})
export class UpdateColorComponent implements OnInit {
  color: Color = {id:0, name: ""}
  colorId: number;
  colorUpdateForm: FormGroup;
  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createColorUpdateForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getColorById(params["colorId"]);
      }
    });
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  getColorById(colorId: number) {
    this.colorService.getColorById(colorId).subscribe((response) => {
      this.color = response.data;
    });
  }

  update() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({id: this.color.id}, this.colorUpdateForm.value);

      this.colorService.updateColor(colorModel).subscribe({
        next: (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        error: (responseError) => {
          if (responseError.error.errors !== null) {
            this.toastrService.error(responseError.error.errors.Name, "Hata")
          }
          console.log(responseError.error.errors)
        },
      });
    } else {
      this.toastrService.error('Form hatalı', 'Dikkat');
    }
  }
}
