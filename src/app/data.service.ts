import { IProduct } from './data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private fetchUrl = 'https://fakestoreapi.com';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.fetchUrl}/products`)
  }

  public getById(id:number): Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${this.fetchUrl}/products/${id}`)
  }
}
