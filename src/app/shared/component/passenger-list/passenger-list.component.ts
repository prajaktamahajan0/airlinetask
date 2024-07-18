
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {
@Input() getObj : any;
@Output() sendData : EventEmitter<any> = new EventEmitter<any>;
public flag : boolean = true;
  getAirline: any;
  count: any;
  fullname : string  = "";
  constructor() { }

  ngOnInit(): void {
    
  }
  onEdit(eve : any){
    this.flag = !this.flag
  }

  onDone(eve : any){
    this.flag = !this.flag
    this.getObj.fullname = this.fullname;

  }
  
  onRemove(eve : any){
    console.log(eve);
    this.sendData.emit(this.getObj)
    this.count = this.getAirline.filter((ele :any) =>{
      return ele.checkedIn === true;
   }).length
  }

  onInput(e : any){
    console.log(e);
    this.fullname = e.target.value;
  }

}
