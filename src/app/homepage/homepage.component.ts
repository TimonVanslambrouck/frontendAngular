import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public productList!: Observable<IProduct[]>
  constructor(private dataService: DataService) { }

  onSave(id:number){
    let src = document.getElementById(`heart${id}`)?.getAttribute('src');
    if (src?.includes('blue')){
      document.getElementById(`heart${id}`)?.setAttribute('src', ('assets/svg/heart-thin.svg'));
    } else {
      document.getElementById(`heart${id}`)?.setAttribute('src', ('assets/svg/heart-thin-blue.svg'));

    }
  }

  goToCategories(){
    window.location.href = 'categories';
  }

  ngOnInit(): void {
    this.productList = this.dataService.getAll();
  }

}
