import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeServiceService } from 'src/app/customer/service/home-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private homeService: HomeServiceService, private route: ActivatedRoute, private router: Router) { }


  products: any[] = [];

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {

    this.homeService.getAllProduct().subscribe((response: any) => {
      console.log(response);
      this.products = response;
    }, err => {
      console.log(err);
    });
  }
}
