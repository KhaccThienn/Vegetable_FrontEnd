import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FavouriteService } from 'src/app/customer/service/favourite.service';
import { HomeServiceService } from 'src/app/customer/service/home-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private homeService: HomeServiceService, private route: ActivatedRoute, private router: Router, private favouriteService: FavouriteService) { }
  data: any;
  userData: any;
  id: string = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Lấy giá trị của tham số 'id' từ URL
      this.id = params.get('id') as string;

      // Thực hiện các hành động cần thiết dựa trên ID mới
      this.getProductById(+this.id);
    });
    this.getLocalStorage();
  }
  getLocalStorage(): any {
    this.userData = JSON.parse(localStorage.getItem('u_data') as any) || {};
    console.log("U Data: ", this.userData);
  }

  getProductById(id: number) {
    console.log(id);

    this.homeService.getProductByID(id).subscribe((response: any) => {
      console.log(response[0]);
      this.data = response[0];
    }, err => {
      console.log(err);
    });
  }

  addToFavour() {
    const postData = {
      account_id: this.userData?.id,
      product_id: this.id
    }
    // console.log("postData: ", postData);
    this.favouriteService.addToFavourite(postData).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/favourite']);
    }, err => {
      console.log(err);
    });
  }
}
