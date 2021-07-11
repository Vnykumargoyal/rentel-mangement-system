import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  titleName = new BehaviorSubject('rental management system');
  catalogList=[
    {
      id:1,
      name:'Booms',
      image:'../../assets/img/booms.jpg'
    },
    {
      id:2,
      name:'Carry Dock Crane',
      image:'../../assets/img/cary dock.jpg'
    },
    {
      id:3,
      name:'Forklifts',
      image:'../../assets/img/forkLift.jpg'
    },
    {
      id:4,
      name:'Scissor Lifts',
      image:'../../assets/img/sissor lift.jpg'
    },
    {
      id:5,
      name:'Single Man Lifts',
      image:'../../assets/img/one man-Lift.jpg'
    },
    {
      id:6,
      name:'Telehandlers',
      image:'../../assets/img/Telehandler.jpg'
    },
    {
      id:7,
      name:'Personnel Cart',
      image:'../../assets/img/personnel cart.jpg'
    }
  ];

  catalogListItems=[
    {
      id:1,
      name:'Articulated-Electric',
      image:'../../assets/img/arti electronioc.jpg'
    },
    {
      id:2,
      name:'Articulated-Engine',
      image:'../../assets/img/articulater.jpg'
    },
    {
      id:3,
      name:'Straight',
      image:'../../assets/img/stright Booms.jpg'
    },

  ]

  headerItemList=[
    {
      id:1,
      name:'ILLINOIS'
    },
    {
      id:2,
      name:'INDIANA'
    },
    {
      id:3,
      name:'KENTUCKY'
    },
    {
      id:4,
      name:'NEW JERSEY'
    },
    {
      id:5,
      name:'OHIO'
    },
    {
      id:6,
      name:'PENNSYLVANIA'
    },
    {
      id:7,
      name:'TEXAS'
    },
    {
      id:8,
      name:'WEST VIRCINIA'
    },
    {
      id:9,
      name:'ALL LOCATIONS'
    }
  ];

  headerSubList=[
    {
      id:1,
      name:'Bowling Green'
    },
    {
      id:2,
      name:'Hopkinsville'
    },
    {
      id:3,
      name:'Louisville'
    },
    {
      id:4,
      name:'Paducah'
    },
    {
      id:5,
      name:'Lexington'
    }
  ]
  constructor() { }
}
