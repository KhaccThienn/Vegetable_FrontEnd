import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/admin/service/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  data: any[] = [];

  constructor(private router: Router, private accountSevice: AccountService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.accountSevice.getAllAccount().subscribe((res: any) => {
      console.log(res);
      this.data = res;
    }, err => {
      console.log(err);
    })
  }

  delete(id: any) {
    // this.isLoadingResult = true;
    // this.categoryService.deleteCategory(id).subscribe((res: any) => {
    //   console.log(res);
    //   this.getAll();
    // }, err => {
    //   console.log(err);
    // })
  }
}
