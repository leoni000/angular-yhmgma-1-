import { Component } from '@angular/core';
import { SubService } from './../service/srch.sub.service';

@Component({
  selector: 'title-head',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent{
   constructor(  
     public sub : SubService
      ){
       // this.com = new ComService();
   }
   srchSend(str){
      this.sub.srch.next({
        payload : str,
        for : 'product'
      });
   }

}