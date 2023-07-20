import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteService } from 'src/app/customer/service/favourite.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  userData: any;
  datas: any[] = [];

  constructor(private favService: FavouriteService, private router: Router) {

  }

  ngOnInit(): void {
    this.getLocalStorage();
    this.getAllCategory()
  }
  getLocalStorage(): any {
    this.userData = JSON.parse(localStorage.getItem('u_data') as any) || {};
    console.log("U Data: ", this.userData);
  }

  getAllCategory() {
    this.favService.getAllFavByUser(this.userData?.id).subscribe((res: any) => {
      console.log(res);
      this.datas = res;
    }, err => {
      console.log(err);
    })
  }
}
