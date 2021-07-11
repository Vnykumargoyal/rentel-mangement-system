import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogListComponent } from './components/catalog/catalog-list/catalog-list.component';
import { CatalogSubListComponent } from './components/catalog/catalog-sub-list/catalog-sub-list.component';
import { CatalogdataComponent } from './components/catalog/catalogdata/catalogdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogListComponent,
    CatalogSubListComponent,
    CatalogdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
