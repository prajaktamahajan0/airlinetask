import { Component } from '@angular/core';
import { Ipassengers } from './shared/module/passenger';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  title = 'airlinetask';
  
  passengers : Ipassengers[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  },
   {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, 
  {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  },
   {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  },
   {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  },
 ]

  ngOnInit(): void {
   
  }


  getIdObject(event : any){
    this.passengers.filter((val,index)=>{
      console.log(event);
      
      if(val === event){
        this.passengers.splice(index,1)
      }
    })
  }

}
