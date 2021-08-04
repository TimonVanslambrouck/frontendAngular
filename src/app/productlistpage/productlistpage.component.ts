import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
