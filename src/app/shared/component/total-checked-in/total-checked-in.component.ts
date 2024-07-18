import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-checked-in',
  templateUrl: './total-checked-in.component.html',
  styleUrls: ['./total-checked-in.component.scss']
})
export class TotalCheckedInComponent implements OnInit {
@Input() getAirline : any;
public count! : Number;
 
  constructor() { }

  
  ngOnInit(): void {
    this.count = this.getAirline.filter((ele :any) =>{
      return ele.checkedIn === true;
   }).length


  }


}
