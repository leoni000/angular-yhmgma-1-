import { Component } from '@angular/core';
import { SubService } from './../../service/srch.sub.service';
import { ComService } from './../../service/communication.service';

@Component({
  selector: 'my-north',
  template: `
  <my-prod></my-prod>
    <h2>North Indian</h2>
   <div class="search">
      <input type="text" class="searchTerm" (keyup)="srchSend($event.target.value)" placeholder="search the item you want">
        </div>



<table class="table">
  <tr *ngFor="let chunk of NI| searchFilter: search |chunkpipe : 4 "  >
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
export class NorthComponent  {

  search:string = '';

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

      for(let i=0;i<this.com.data.length;i++){
        for(let j=0;j<this.NI.length;j++){
         // console.log(this.com.data[i].enable + this.com.data[i].food_name)
         if(this.com.data[i].food_name == this.NI[j].food_name){
         // console.log("true");
         this.NI[j].enable = this.com.data[i].enable;
         this.NI[j].flag = this.com.data[i].flag;
         this.NI[j].quantity = this.com.data[i].quantity;
         }
        }
        // console.log(this.com.data[i]);
      }
     }
   }

    NI:any = [
    {
      food_image : "https://www.roughguides.com/wp-content/uploads/2015/10/porotta-food-india-shutterstock_596981366-840x561.jpg",
      food_name : "Parotta",
      food_price : 60,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://6d1bdf0e0edb084eae10-5bfabe5484726969ac662c6d377e2f3c.ssl.cf2.rackcdn.com/themes/img/north-indian-food3.jpg",
      food_name : "Malai Kofta",
      food_price : 120,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uahvxpTMHd-1Vz3fmKdFBpa8XNG5_CgKhWKB6s_rgxmQX7SM&s",
      food_name : "Aloo Gravy",
      food_price : 110,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.asaucykitchen.com/wp-content/uploads/2019/01/Thai-Red-Coconut-Chicken-4.jpg",
      food_name : "Chicken coconut curry",
      food_price : 160,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions-1024x915.jpg",
      food_name : "Kadai Panner",
      food_price : 140,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://i.guim.co.uk/img/static/sys-images/Lifeandhealth/Pix/pictures/2013/10/3/1380795561209/Vada-pav-sandwich-009.jpg?width=300&quality=85&auto=format&fit=max&s=29d3235d128128f1f11df3290a690491",
      food_name : "Vada Pav",
      food_price : 45,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://m.recipes.timesofindia.com/recipes/moong-sprouts-pav-bhaji/photo/53827968.cms",
      food_name : "Pav Bhaji",
      food_price : 60,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://i.pinimg.com/originals/d5/98/4f/d5984f30c973131a2600cf0f41a2c70b.jpg",
      food_name : "North Thali",
      food_price : 130,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://flavoursrestaurants.com/wp-content/uploads/2018/02/Garlic-naan-butter-naan-BD-0.300.jpg",
      food_name : "Butter Naan",
      food_price : 35,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://content3.jdmagicbox.com/comp/mumbai/l7/9999p2423.2423.190529213702.n9l7/catalogue/hotel-new-maharashtra-non-veg-shirdi-north-indian-delivery-restaurants-vwpvv03eak.jpg",
      food_name : "Egg Curry",
      food_price : 120,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.watscooking.com/images/dish/normal/mutton-biryani4.jpg",
      food_name : "Mughal Mutton Biryani",
      food_price : 290,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://media-cdn.tripadvisor.com/media/photo-s/0f/2e/d4/1a/hyderabadi-biryani.jpg",
      food_name : "Hyderabad Chicken Biryani",
      food_price : 220,
      enable : true,
      quantity : 1,
      flag : false
    }
  ]

   sendcart(item){
    //  console.log(this.com.data);
    //  console.log("b4 cart"+item.food_name+item.food_price);
    // this.niarray.push(item);
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