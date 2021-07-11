import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogListComponent } from './components/catalog/catalog-list/catalog-list.component';
import { CatalogSubListComponent } from './components/catalog/catalog-sub-list/catalog-sub-list.component';
import { CatalogdataComponent } from './components/catalog/catalogdata/catalogdata.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'Equipment Catalog',component:CatalogdataComponent,children:[
    {path:'',component:CatalogListComponent},
    {path:'Booms',component:CatalogSubListComponent},
  ]},

  {
    path: '**',
    redirectTo: '/',
    // component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
