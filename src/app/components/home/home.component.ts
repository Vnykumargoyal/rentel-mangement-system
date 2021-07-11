import { Component, OnInit,Input } from '@angular/core';
// import { DataServiceService } from './/service/data.service';
import {DataServiceService} from '../../service/data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome = 'Welcome to';
  data;
  constructor(
    private _service:DataServiceService
  ) { }

  ngOnInit() {
    this._service.titleName.subscribe((data)=>{
      this.data = data;
    })
  }

}
