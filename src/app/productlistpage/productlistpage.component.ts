import { IProduct } from './../data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productlistpage',
  templateUrl: './productlistpage.component.html',
  styleUrls: ['./productlistpage.component.scss']
})
export class ProductlistpageComponent implements OnInit {
  showBrand = false;
  showStorage = false;
  showPrice = false;
  showReview = false;
  showColor = false;
  productListSorted:any;
  public productList!: Observable<IProduct[]>
  constructor(private dataService: DataService) {
    this.dataService.getAll()
    .subscribe(
      (data) => {
        for (const product of data) {
          if (this.productListSorted == undefined) {
            this.productListSorted = [product];
          } else {
            this.productListSorted.push(product);
          }         
        }
      }
    )
   }

  addToCart(id:number){
    // add to cart
  }

  ngOnInit(): void {
    this.productList = this.dataService.getAll();
    this.dataService.getAll()
    .subscribe(
      (data) => {
        for (const product of data) {
          if (this.productListSorted == undefined) {
            this.productListSorted = [product];
          } else {
            this.productListSorted.push(product);
          }         
        }
        
      }
    )
  }

}
