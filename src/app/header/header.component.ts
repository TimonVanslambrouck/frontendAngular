import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showCategories = false;
  showCategories2 = false;
  toggleShowCategories(){
    this.showCategories = !this.showCategories;
    this.showCategories2 = false;
  }
  toggleShowCategories2(){
    this.showCategories2 = !this.showCategories2;
    this.showCategories = false  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
