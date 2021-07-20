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

  ngOnInit(): void {
    this.productList = this.dataService.getAll();
  }

}
