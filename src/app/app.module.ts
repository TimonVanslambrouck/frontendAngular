import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {environment} from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore';

import {FirebaseService} from './firebase.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductlistpageComponent } from './productlistpage/productlistpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriespageComponent } from './categoriespage/categoriespage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductpageComponent,
    ProductlistpageComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    CategoriespageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
