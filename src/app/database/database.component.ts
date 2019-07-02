import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  bindData:any;
  constructor(public service:ServiceService) { }

  ngOnInit() {

  setInterval(()=>{
    this.service.getdata().subscribe(res=>{
  this.bindData = res;
  console.log(res)
  })
  },1000)
  }
 del(value){
  this.service.delete(value).subscribe(res=>{
	console.log(res) 
  })
  console.log(value)
 }
}


