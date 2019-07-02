import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public data:ServiceService) { }
 

  ngOnInit() {
  }
sendData(value){
  
  this.data.senddata(value).subscribe(res=>{
  console.log(res)
  })
 }
}
