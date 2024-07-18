import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-air-line-pass',
  templateUrl: './air-line-pass-component.html',
  styleUrls: ['./air-line-pass-component.scss']
})
export class AirLinePassDashboardComponent implements OnInit {
@Input() getArrFromApp! : any;
@Output() sendIdObj : EventEmitter<any> = new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {
  }
  onsendData(eve : any){
  this.sendIdObj.emit(eve)
  }

}
