import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../service/data-service.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  catalogList;
  constructor(
    private _service: DataServiceService
  ) { }

  ngOnInit() {

    this.catalogList = this._service.catalogList;
  }



}
