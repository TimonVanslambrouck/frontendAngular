import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
  currentImage = 1;
  public product!: Observable<IProduct>;
  activeProduct:any;
  activeMenu = 'description';
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private firebaseService: FirebaseService
    ) {   
     }

    onSave(){
      // save to fav
    }

    addToCart(){
      let product = {
        id: this.activeProduct.id,
        title: this.activeProduct.title,
        picture: this.activeProduct.image,
        price: this.activeProduct.price
      };
      this.firebaseService.createNewProduct(product).then(res =>{
          console.log(res);
      }).catch(error => {
        console.log(error);
      })
    }

    goBack(){
      window.history.back();
    }

    changeActive(option:string){
      document.getElementById('menu')?.scrollIntoView();
      this.activeMenu = option;
    }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.product = this.dataService.getById(id);
    this.dataService.getById(id).subscribe(
      (data) => {
        this.activeProduct = data;
      }
    )
  }


}
