import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  headerList;
  headerSubList;
  constructor(
    private _service:DataServiceService
  ) { }

  ngOnInit() {
    this.headerList = this._service.headerItemList;
    this.headerSubList = this._service.headerSubList;
  }

}
