import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/layouts/header/header.component';
import { SidebarComponent } from './component/layouts/sidebar/sidebar.component';
import { ListcategoryComponent } from './component/category/listcategory/listcategory.component';
import { AddcategoryComponent } from './component/category/addcategory/addcategory.component';
import { EditcategoryComponent } from './component/category/editcategory/editcategory.component';
import { ListproductComponent } from './component/product/listproduct/listproduct.component';
import { AddproductComponent } from './component/product/addproduct/addproduct.component';
import { UpdateproductComponent } from './component/product/updateproduct/updateproduct.component';
import { ListAccountComponent } from './component/account/list-account/list-account.component';
import { AddAccountComponent } from './component/account/add-account/add-account.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ListcategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    ListproductComponent,
    AddproductComponent,
    UpdateproductComponent,
    ListAccountComponent,
    AddAccountComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
