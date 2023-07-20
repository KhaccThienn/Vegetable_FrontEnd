import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { ListProductsComponent } from './component/pages/list-products/list-products.component';
import { DetailsComponent } from './component/pages/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:id', component: ListProductsComponent },
  { path: 'product/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
