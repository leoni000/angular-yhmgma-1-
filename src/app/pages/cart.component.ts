import { Component } from '@angular/core';
import { ComService } from './../service/communication.service';

@Component({
  selector: 'my-cart',
  template: `
<title-head></title-head>
  <table>
  <tr>
  <td class="td1">Food Item</td>
  <td class="td1">Quantity</td>
  <td class="td1">Food Price</td>
  <td class="td1"></td>
  </tr>

  <tr *ngFor = "let item of cart; let i=item;">
  <td class="td2">{{item.food_name}}</td>
  <td class="td2">
  <button (click)="alter(item,-1)"> - </button>
  <input class="ipt" type="text" [(ngModel)]="item.quantity"  style="width:20" readonly >
  <button (click)="alter(item,1)"> + </button>
  </td>
  <td class="td2">Rs{{item.tot_cost}}/-</td>
  <td class="td2"><button type="text" (click) = "rmv(item)" >X</button></td>
  </tr>
  </table>

  <p class="tot"> Total amount : {{total}} </p>
  `,
  styles : [`
 table{
     width:100%;
     vertical-align:middle;
     margin-top:2em;
     margin-bottom:0em;
     border-collapse:collapse;
   }
   td.td1
   {
     font-family:cursive;
     padding:0.3em;
      background-color:#C8E9F1;
     
     text-align:center;
     font-size:25px;
   }
    td.td2
   {
     padding:0.3em;
      border:2px solid;
      border-collapse:collapse;
     text-align:center;
     font-size:20px;
   }
   .tot
   {
     font-family : cursive;
     font-size : 150%;
     font-weight : bold;
     text-align : right;
     margin-right : 5em;
     margin-top:1em;
   }
   .ipt
   {
     width : 30px;
     text-align : center;
   }

  `]
})
export class CartComponent  {

  cart:any=[];
  total:number;
 

    constructor(   public com : ComService ){
      this.processcart();
     
    }

processcart(){
    //console.log(this.com.data);
    this.cart = this.com.data;
    this.cart.forEach((item)=>{
      // console.log(item.food_price);
      // item['quantity']=1;
      item['tot_cost']=item.food_price;
     // console.log(this.cart);
    })
    console.log("data",this.cart);
    this.calctot();
    

}


calctot(){
    this.total = 0;
   this.cart.forEach((item)=>{
    console.log(item.food_price,item.tot_cost);
     item.tot_cost = item.food_price * item.quantity;
     this.total += item.tot_cost;
   })
   this.com.total_amount = this.total;
}

rmv(item){
  
  this.cart.splice(this.cart.indexOf(item),1);

  this.calctot();
 }

 alter(item,val){
   item.quantity += val;
   if(item.quantity > 0){
    
   item.tot_cost = item.food_price * item.quantity;
    this.calctot();
       
 }
 else this.rmv(item);

 }


}

