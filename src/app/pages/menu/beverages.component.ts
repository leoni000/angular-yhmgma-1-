import { Component } from '@angular/core';
import { SubService } from './../../service/srch.sub.service';
import { ComService } from './../../service/communication.service';

@Component({
  selector: 'my-bev',
  template: `
  <my-prod></my-prod>
    <h2>Beverages</h2>
    <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" (keyup)="srchSend($event.target.value)" placeholder="search the item you want">
        </div>
</div>


<table class="table">
 <tr *ngFor="let chunk of BV| searchFilter: search |chunkpipe : 4 "  >
    <td *ngFor="let item of chunk ">
      <div class="card">
        <div class="column">
          <img src="{{item.food_image}}" class="figure-img img-fluid rounded" height="200" width="300">
         <h1 > {{item.food_name}}</h1>
          <p class="price">Rs{{item.food_price}}/-</p>
          <div *ngIf = item.enable>
          <button class="button" (click) = "sendcart(item)">Add to Cart</button>
          </div>
          <div class="number" *ngIf = item.flag>
	          <span class="minus" (click)="alter(item,-1)">-</span>
            <input type="text" [(ngModel)] = "item.quantity"/>
	          <span class="plus" (click)="alter(item,1)">+</span>
          </div>
        </div>
      </div>
    </td>
  </tr>
</table>

<div class = "cad">
<button class="button" routerLink="/Cart">Proceed to checkout</button>
</div>
  `,
  styles:[`
  h2{
    text-align : center;
    border-bottom : 2px solid;
    width : 15%;
    margin : auto;
    font-size : 200%;
    font-weight : normal;
    font-family : cursive;
  }
  .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 25px;
  border:double;
  padding: 0.5px;
  text-align: center;
}


.price {
  color: black;
  text-align: center;
    font-weight: bold;
    font-family: Arial;
  margin-left:0em;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 18px;
  margin-top:0.3em;
  color:white;
  background-color:#8936B2;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  font-family:sans-serif;
  width:85%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
  font-size:20px;
  font-weight: bold;
  background-color:#02BA16;
}

img
{
  max-width: 100%;
  vertical-align: middle;
  max-height: 100%;
}
.column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  
h1{
  font-size: 25px;
  font-family:Calibri;
text-align: center;
font-weight: normal;
}
.search
{
  margin-top:2em;
  text-align:center;
}
.searchTerm:focus{
  color: #00B4CC;
}

	span {cursor:pointer; }
		.number{
			margin:50px;
		}
		.minus, .plus{
			width:20px;
			height:20px;
			background:#f2f2f2;
			border-radius:4px;
			padding:8px 5px 8px 5px;
			border:1px solid #ddd;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
		}
		input{
			height:34px;
      width: 50px;
      text-align: center;
      font-size: 16px;
			border:1px solid #ddd;
			border-radius:4px;
      display: inline-block;
      vertical-align: middle;
		}	
    .cad{
      text-align: right;
      margin-right: 5em;
    }
    .cad button
    {
     border: none;
     outline: 0;
     padding: 18px;
     margin-top:0.3em;
     color:white;
     background-color:#8936B2;
     border-radius: 10px;
     cursor: pointer;
     font-family:sans-serif;
     font-size: 18px;
    }
    .cad button:hover 
    {
      opacity: 0.7;
      font-size:20px;
      font-weight: bold;
      background-color:#02BA16;
    }
  `]
})
export class BeverageComponent  {

  search:string = '';

     constructor( 
     public sub : SubService,
     public com : ComService
      ){
       this.chk();
   }

   chk()
   {
     if(this.com.data.length > 0){

      for(let i=0;i<this.com.data.length;i++){
        for(let j=0;j<this.BV.length;j++){
         // console.log(this.com.data[i].enable + this.com.data[i].food_name)
         if(this.com.data[i].food_name == this.BV[j].food_name){
         // console.log("true");
         this.BV[j].enable = this.com.data[i].enable;
         this.BV[j].flag = this.com.data[i].flag;
         this.BV[j].quantity = this.com.data[i].quantity;
         }
        }
        // console.log(this.com.data[i]);
      }
     }
   }

    BV:any = [
    {
      food_image : "https://5.imimg.com/data5/NL/NN/GLADMIN-9598894/kalimark-bovonto-500x500.png",
      food_name : "Bovonto",
      food_price : 40,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://teafloor.com/blog/wp-content/uploads/2017/09/Reasons-which-separate-the-tea-from-other-beverages.jpg",
      food_name : "Tea",
      food_price : 20,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.ecooe.com/ecooe-life/wp-content/uploads/2016/08/cappuccino.jpg",
      food_name : "Coffee",
      food_price : 40,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://cnet2.cbsistatic.com/img/lgpluG63Y50m9mtq5NdMZ5m21Ww=/2014/04/21/0391fc07-e12e-4d94-ac9a-36b8fbf9b9ee/blackhops.jpg",
      food_name : "Sparkling Drink",
      food_price : 60,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.ossininglibrary.org/wp-content/uploads/2018/06/WHDQ-513014658.jpg",
      food_name : "Ice-Cream",
      food_price : 45,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.biggerbolderbaking.com/wp-content/uploads/2015/05/BBB71-Homemade-Ice-Cream-Milkshakes-Thumbnail-v.1.jpg",
      food_name : "Milk-Shake",
      food_price : 50,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://i1.wp.com/theindianclaypot.com/wp-content/uploads/2017/06/FALOODA-SMALLER.jpg?fit=1620%2C1080",
      food_name : "Falooda",
      food_price : 80,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://food.manoramaonline.com/content/dam/mm/en/food/in-season/images/2019/11/8/wine.jpg",
      food_name : "Red-White wine",
      food_price : 130,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.jasti.com/suploads/2018/Sep/17/33708/1537164519icegola.jpg",
      food_name : "Ice-Gola",
      food_price : 65,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://i1.wp.com/www.indianrecipeinfo.com/cooking/wp-content/uploads/2011/03/Badam-Milk-Shake.jpg?fit=547%2C677&ssl=1",
      food_name : "Badam Drink",
      food_price : 45,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://chowhound1.cbsistatic.com/assets/2015/04/10344_sex_on_beach.jpg",
      food_name : "Cocktail",
      food_price : 80,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://i.pinimg.com/originals/12/1c/9a/121c9a2622417417b2d8da8464bce4f3.jpg",
      food_name : "Red Bull",
      food_price : 70,
      enable : true,
      quantity : 1,
      flag : false
    }
  ]

   sendcart(item){
    //  console.log(this.com.data);
    //  console.log("b4 cart"+item.food_name+item.food_price);
    // this.cearray.push(item);
    item.enable = false;
    item.flag = true;
    // console.log(this.cartarray);
    this.com.data.push(item);
    // console.log("after cart"+this.com.data);
   }

   srchSend(str){
     this.search = str;
   }

    alter(item,val){
   item.quantity += val;
   if(item.quantity < 1){
      item.enable = true;
      item.flag = false;
      item.quantity = 1;
    }

 }

}