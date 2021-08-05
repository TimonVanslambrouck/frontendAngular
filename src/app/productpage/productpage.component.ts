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
  activeMenu = 'description';
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
    ) { }

    onSave(){
      // save to fav
    }

    addToCart(){
      //add to cart
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
  }


}
