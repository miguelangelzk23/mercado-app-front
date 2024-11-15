import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';

export const routes: Routes = [

{  path:'', component: HomeComponent },
{  path:'categoria/:id', component: CategoriaComponent },
{  path:'product', component: ProductDetailComponent }
];
