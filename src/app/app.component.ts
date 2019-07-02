import { Component } from '@angular/core';
import {ServiceService} from './service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(public data:ServiceService) { }
 send(value){
  
  
  this.data.senddata(value).subscribe(res=>{
  console.log(res)
  })
 }
  title = 'service';
}
