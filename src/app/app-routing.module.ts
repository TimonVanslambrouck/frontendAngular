import { CategoriespageComponent } from './categoriespage/categoriespage.component';
import { ProductlistpageComponent } from './productlistpage/productlistpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products',
  children: [
    {path: '', component: ProductlistpageComponent},
    {path: ':id', component: ProductpageComponent},
  ]},  
  {path: 'categories', component: CategoriespageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
