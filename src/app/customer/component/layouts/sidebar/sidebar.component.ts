import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/customer/service/home-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private homeService: HomeServiceService, private router: Router) {

  }
  userData: any;
  categories: any[] = [];

  ngOnInit(): void {
    this.getAllCategory();
    this.getLocalStorage();
  }

  getLocalStorage(): any {
    this.userData = JSON.parse(localStorage.getItem('u_data') as any) || {};
    console.log("U Data: ", this.userData);
  }

  getAllCategory() {
    this.homeService.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.categories = res;
    }, err => {
      console.log(err);
    })
  }
}
