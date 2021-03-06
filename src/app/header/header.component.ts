import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showCategories = false;
  showCategories2 = false;
  showLanguages = false;
  showCart = false;
  cart:any;
  ids:any;
  toggleShowCategories(){
    this.showCategories = !this.showCategories;
    this.showCategories2 = false;
  }
  toggleShowCategories2(){
    this.showCategories2 = !this.showCategories2;
    this.showCategories = false  
  }

  goToPage(id:number){
    window.location.href = `products/${id}`
  }

  goHome(){
    window.location.href = ' ';
  }

  deleteProduct(id:string){
    this.cart = [];
    this.firebaseService.deleteProduct(id);
  }

  constructor(    
    private firebaseService: FirebaseService
    ) { }

  ngOnInit(): void {
    this.firebaseService.getAllProducts().subscribe(
      (data) => {
        data.forEach(element => {
          if (this.cart == undefined) {
            this.cart = [element.payload.doc.data()];
            this.ids = [element.payload.doc.id]
          } else {
            this.cart.push(element.payload.doc.data());
            this.ids.push(element.payload.doc.id)
          }          
        });
      }
    )
  }

}
