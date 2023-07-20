import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListcategoryComponent } from './component/category/listcategory/listcategory.component';
import { AddcategoryComponent } from './component/category/addcategory/addcategory.component';
import { EditcategoryComponent } from './component/category/editcategory/editcategory.component';
import { ListproductComponent } from './component/product/listproduct/listproduct.component';
import { AddproductComponent } from './component/product/addproduct/addproduct.component';
import { UpdateproductComponent } from './component/product/updateproduct/updateproduct.component';
import { ListAccountComponent } from './component/account/list-account/list-account.component';
import { AddAccountComponent } from './component/account/add-account/add-account.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },

  { path: 'category', component: ListcategoryComponent },
  { path: 'category/add', component: AddcategoryComponent },
  { path: 'category/edit/:id', component: EditcategoryComponent },

  { path: 'product', component: ListproductComponent },
  { path: 'product/add', component: AddproductComponent },
  { path: 'product/edit/:id', component: UpdateproductComponent },
  {
    path: 'account', component: ListAccountComponent
  },
  { path: 'account/add', component: AddAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
