import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/admin/models/category.model';
import { CategoryService } from 'src/app/admin/service/category.service';
import { ProductService } from 'src/app/admin/service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  data: Category[] = [];
  productFormPost: any = FormGroup;
  responseMessage: any;


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.productFormPost = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      sale_price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  getAll() {
    this.categoryService.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.data = res;
    }, err => {
      console.log(err);
    })
  }

  handleSubmit() {
    let formData = this.productFormPost.value;
    let data = {
      name: formData.name,
      price: formData.price,
      sale_price: formData.sale_price,
      image: formData.image,
      category_id: formData.category_id,
      status: formData.status,
      description: formData.description,
    }
    console.log(data);

    this.productService.createProduct(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.router.navigate(['/admin/product']);
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
      }
    }
    )
  }
}
