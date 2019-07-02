import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 mydata:any;
  constructor(public http:Http) { }
  senddata(value){
  return this.http.post('https://5cc099c282ec6a00149f3dae.mockapi.io/api/v1/Test',value)
  .pipe(map(data=>this.mydata=data.json()))
  }
  getdata(){
  return this.http.get('https://5cc099c282ec6a00149f3dae.mockapi.io/api/v1/Test')
  .pipe(map(data=>this.mydata=data.json()))
  }
  delete(value){
   return this.http.delete('https://5cc099c282ec6a00149f3dae.mockapi.io/api/v1/Test/'+value)
  .pipe(map(data=>this.mydata=data.json()))
  }
}
