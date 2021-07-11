import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../service/data-service.service';

@Component({
  selector: 'app-catalog-sub-list',
  templateUrl: './catalog-sub-list.component.html',
  styleUrls: ['./catalog-sub-list.component.css']
})
export class CatalogSubListComponent implements OnInit {
  listItems;
  constructor(
    private _service:DataServiceService,
  ) { }

  ngOnInit() {
    this.listItems = this._service.catalogListItems;
  }

}
