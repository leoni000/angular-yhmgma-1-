import { Component } from '@angular/core';
import { SubService } from './../../service/srch.sub.service';
import { ComService } from './../../service/communication.service';

@Component({
  selector: 'my-south',
  template: `
  <my-prod></my-prod>
    <h2>South Indian</h2>
    <div class="search">
      <input type="text" class="searchTerm" (keyup)="srchSend($event.target.value)" placeholder="search the item you want">
        </div>


<table class="table">
  <tr *ngFor="let chunk of SI| searchFilter: search |chunkpipe : 4 "  >
    <td *ngFor="let item of chunk ">
      <div class="card">
        <div class="column">
          <img src="{{item.food_image}}" class="figure-img img-fluid rounded" height="200" width="300">
         <h1> {{item.food_name}}</h1>
          <p class="price">Rs{{item.food_price}}/-</p>
          <div *ngIf = item.enable>
          <button type="button" (click) = "sendcart(item)">Add to Cart</button>
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
.searchTerm:focus{
  color: #00B4CC;
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
export class SouthComponent  {

  search:string = '';
  // added:boolean = true;

     constructor( 
     public com : ComService
      ){
       this.chk();
   }
   processSub($event){
     if($event.for == "product" ) {
       this.search = $event.payload;
       console.log(this.search);
     }
   }

   chk()
   {
     if(this.com.data.length > 0){
      // console.log(this.com.data);
      // this.com.data.forEach((item)=>{
      //   if(this.SI.indexOf(item) != -1)
      //   console.log(this.SI[this.SI.indexOf(item)]);
      //   else
      //   console.log("not in SI");
      // })

      for(let i=0;i<this.com.data.length;i++){
        for(let j=0;j<this.SI.length;j++){
         // console.log(this.com.data[i].enable + this.com.data[i].food_name)
         if(this.com.data[i].food_name == this.SI[j].food_name){
         // console.log("true");
         this.SI[j].enable = this.com.data[i].enable;
         this.SI[j].flag = this.com.data[i].flag;
         this.SI[j].quantity = this.com.data[i].quantity;
         }
        }
        // console.log(this.com.data[i]);
      }
     }
   }

    SI:any = [
    {
      food_image : "https://www.dinneratthezoo.com/wp-content/uploads/2019/07/grilled-chicken-thighs-5.jpg",
      food_name : "Grill Chicken",
      food_price : 280,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.whiskaffair.com/wp-content/uploads/2015/12/Tandoori-Chicken-5.jpg",
      food_name : "Tandoori Chicken",
      food_price : 300,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.bigbasket.com/media/uploads/recipe/w-l/655_1.jpg",
      food_name : "Mutton Gravy",
      food_price : 250,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://m.recipes.timesofindia.com/recipes/mutton-sukha/photo/53823731.cms",
      food_name : "Mutton Chukka",
      food_price : 200,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://i.ndtvimg.com/i/2015-02/garlic-prawns_625x350_81423567373.jpg",
      food_name : "Prawn Fry",
      food_price : 230,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.bawarchi.com/uploads/oetrhDhdfjhge_bigger.jpg",
      food_name : "Fish Gravy",
      food_price : 210,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://thewoksoflife.com/wp-content/uploads/2016/01/pan-fried-fish-5.jpg",
      food_name : "Fish Fry",
      food_price : 250,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://files2.hungryforever.com/wp-content/uploads/2016/11/22170143/best-south-indian-meals-in-chennai.jpg",
      food_name : "South meals",
      food_price : 120,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://media-cdn.tripadvisor.com/media/photo-s/11/e9/01/5f/idly-sambar.jpg",
      food_name : "Idly",
      food_price : 50,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://static.toiimg.com/photo/65164556.cms",
      food_name : "Dosa",
      food_price : 70,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://theculturetrip.com/wp-content/uploads/2017/11/bisi_bele_bath_bisibelebath.jpg",
      food_name : "Bisibela-bath",
      food_price : 50,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2-500x500.jpg",
      food_name : "Curd Rice",
      food_price : 40,
      enable : true,
      quantity : 1,
      flag : false
    }
  ]
    
   sendcart(item){
    //  console.log(this.com.data);
    //  console.log("b4 cart"+item.food_name+item.food_price);
    // this.siarray.push(item);
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