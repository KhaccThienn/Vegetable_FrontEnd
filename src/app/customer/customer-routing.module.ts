import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { ListProductsComponent } from './component/pages/list-products/list-products.component';
import { DetailsComponent } from './component/pages/details/details.component';
import { FavComponent } from './component/pages/fav/fav.component';
import { ProductsComponent } from './component/pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'category/:id', component: ListProductsComponent },
  { path: 'product/:id', component: DetailsComponent },
  { path: 'favourite', component: FavComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
