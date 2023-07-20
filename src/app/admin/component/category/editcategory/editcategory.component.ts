import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/admin/service/category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  categoryFormUpdate = new FormGroup({
    name: new FormControl(''),
    status: new FormControl('')
  });
  id: number = this.route.snapshot.params['id'];
  responseMessage: any;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getOneCategory(this.id);
  }

  getOneCategory(id: number) {
    this.categoryService.getOneCategory(id).subscribe((response: any) => {
      this.categoryFormUpdate = new FormGroup({
        name: new FormControl(response[0].name),
        status: new FormControl(response[0].status)
      });
    });
  }

  handleSubmit() {
    let formData = this.categoryFormUpdate.value;
    let data = {
      name: formData.name,
      status: formData.status
    }
    this.categoryService.updateCategory(this.id, data).subscribe(
      (response: any) => {
        console.log("response: ", response);

        this.responseMessage = response?.message;
        this.router.navigate(['/admin/category'])
      }, (error: any) => {
        console.log(error);
      })
  }
}
