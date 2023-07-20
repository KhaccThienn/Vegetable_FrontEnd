import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HomeServiceService } from 'src/app/customer/service/home-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  id: string = '';
  constructor(private homeService: HomeServiceService, private route: ActivatedRoute, private router: Router) { }


  products: any[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Lấy giá trị của tham số 'id' từ URL
      this.id = params.get('id') as string;

      // Thực hiện các hành động cần thiết dựa trên ID mới
      this.getProductByCategory(+this.id);
    });
  }

  getProductByCategory(id: number) {
    console.log(id);

    this.homeService.getAllProductByCate(id).subscribe((response: any) => {
      console.log(response);
      this.products = response;
    }, err => {
      console.log(err);
    });
  }
}
