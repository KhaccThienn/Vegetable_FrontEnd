import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/customer/service/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeServiceService, private router: Router) {

  }
  categories: any[] = [];
  newProducts: any[] = [];
  saleProducts: any[] = [];

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllNew();
    this.getAllSale();
  }

  getAllCategory() {
    this.homeService.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.categories = res;
    }, err => {
      console.log(err);
    })
  }

  getAllNew() {
    this.homeService.getAllNewProduct().subscribe((res: any) => {
      console.log("New PD", res);
      this.newProducts = res;
    }, err => {
      console.log(err);
    })
  }

  getAllSale() {
    this.homeService.getAllSaleProduct().subscribe((res: any) => {
      console.log("New PD", res);
      this.saleProducts = res;
    }, err => {
      console.log(err);
    })
  }
}
