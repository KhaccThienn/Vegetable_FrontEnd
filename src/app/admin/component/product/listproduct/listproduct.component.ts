import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/admin/models/product.model';
import { ProductService } from 'src/app/admin/service/product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  data: any = [];
  isLoadingResult = true;
  keywords: any;
  myGroup: any = new FormGroup({
    keywords: new FormControl(''),
  });

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProduct().subscribe((res: any) => {
      console.log(res);
      this.data = res;
      this.isLoadingResult = false;
    }, err => {
      console.log(err);
      this.isLoadingResult = false;
    })
  }

  getByName(name: any) {
    this.productService.searchByKeyword(name).subscribe((res: any) => {
      console.log(res);
      this.data = res;
    }, err => {
      console.log(err);
    })
  }

  handleChange(e: any) {
    this.keywords = e.target.value;
    if (this.keywords) {
      this.getByName(this.keywords);
    } else {
      this.getAll();
    }
  }

  delete(id: any) {
    this.productService.deleteProduct(id).subscribe((res: any) => {
      console.log(res);
      this.getAll();
    }, err => {
      console.log(err);
    })
  }

}
