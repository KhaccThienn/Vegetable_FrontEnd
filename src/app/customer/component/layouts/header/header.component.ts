import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: any;

  ngOnInit(): void {
    this.getLocalStorage();
  }

  getLocalStorage(): any {
    this.userData = JSON.parse(localStorage.getItem('u_data') as any) || {};
    console.log("U Data: ", this.userData);
  }
}
