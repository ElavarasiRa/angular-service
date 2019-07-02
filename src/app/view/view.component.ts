import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route} from '@angular/router';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any;
  bindData:any;
  display:any={
   name:'',
   email:'',
   adhaar:'',
   age:'',
   gender:''
  }
  constructor(private route:ActivatedRoute,public service:ServiceService) { }

  ngOnInit() {
  this.id=this.route.snapshot.params['id'];
  console.log(this.id);
  this.service.getdata().subscribe(res=>{
  this.bindData = res;
   for(let i=0;i<this.bindData.length;i++){
    if(this.id==this.bindData[i].id){
     this.display.name = this.bindData[i].name;
     this.display.email = this.bindData[i].email;
     this.display.adhaar = this.bindData[i].adhaar;
     this.display.age = this.bindData[i].age;
     this.display.gender = this.bindData[i].gender;
     console.log(this.bindData[i])
     console.log(this.display)
    }
   }
  })
  }

}
