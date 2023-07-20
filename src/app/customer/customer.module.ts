import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from './component/layouts/header/header.component';
import { FooterComponent } from './component/layouts/footer/footer.component';
import { HomeComponent } from './component/pages/home/home.component';
import { SidebarComponent } from './component/layouts/sidebar/sidebar.component';
import { ListProductsComponent } from './component/pages/list-products/list-products.component';
import { DetailsComponent } from './component/pages/details/details.component';
import { FavComponent } from './component/pages/fav/fav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ListProductsComponent,
    DetailsComponent,
    FavComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
