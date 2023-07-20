import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/admin/service/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  categoryFormPost: any = FormGroup;
  responseMessage: any;


  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.categoryFormPost = this.formBuilder.group({
      name: ['', [Validators.required]],
      status: ['1', [Validators.required]],
    })
  }
  handleSubmit() {
    let formData = this.categoryFormPost.value;
    let data = {
      name: formData.name,
      status: formData.status
    }
    console.log(data);

    this.categoryService.createCategory(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.router.navigate(['/admin/category']);
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
      }
    }
    )
  }
}
