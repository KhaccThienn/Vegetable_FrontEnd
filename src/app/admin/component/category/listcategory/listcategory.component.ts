import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/admin/models/category.model';
import { CategoryService } from 'src/app/admin/service/category.service';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {

  data: Category[] = [];
  keywords: any;

  myGroup: any = new FormGroup({
    keywords: new FormControl(''),
  });
  isLoadingResult = true;

  constructor(private categoryService: CategoryService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getAll();
  }

  getAll() {
    this.categoryService.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.data = res;
      this.isLoadingResult = false;
    }, err => {
      console.log(err);
      this.isLoadingResult = false;
    })
  }

  getByName(name: any) {
    this.categoryService.searchByKeyword(name).subscribe((res: any) => {
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
    this.isLoadingResult = true;
    this.categoryService.deleteCategory(id).subscribe((res: any) => {
      console.log(res);
      this.getAll();
    }, err => {
      console.log(err);
    })
  }

}
