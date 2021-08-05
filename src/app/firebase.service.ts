import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Firebase code written with the help of these tutorial: https://www.youtube.com/watch?v=TucRRB57fi8&ab & https://www.youtube.com/watch?v=tfy2mTv5JsY&ab

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public fireservices:AngularFirestore) { }

  createNewProduct(product:object){
    return this.fireservices.collection('products').add(product);
  }

  getAllProducts(){
    return this.fireservices.collection('products').snapshotChanges();
  }

  deleteProduct(id:string){
    return this.fireservices.doc('products/' + id).delete();
  }
}
