import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/admin/models/category.model';
import { CategoryService } from 'src/app/admin/service/category.service';
import { ProductService } from 'src/app/admin/service/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  data: any[] = [];

  productFormPost = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    sale_price: new FormControl(''),
    image: new FormControl(''),
    category_id: new FormControl('1'),
    status: new FormControl(''),
    description: new FormControl(''),
  })

  id: number = this.route.snapshot.params['id'];
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getOneProduct(this.id);
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.data = res;
    }, err => {
      console.log(err);
    })
  }

  getOneProduct(id: number) {
    this.productService.getOneProduct(id).subscribe((response: any) => {
      console.log(response[0]);

      this.productFormPost = new FormGroup({
        name: new FormControl(response[0].name),
        price: new FormControl(response[0].price),
        sale_price: new FormControl(response[0].sale_price),
        image: new FormControl(response[0].image),
        category_id: new FormControl(response[0].category_id),
        status: new FormControl(response[0].status),
        description: new FormControl(response[0].description),
      });
    });
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

    this.productService.updateProduct(this.id, data).subscribe((response: any) => {
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
