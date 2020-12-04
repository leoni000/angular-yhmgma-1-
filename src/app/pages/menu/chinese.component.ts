import { Component } from '@angular/core';
import { SubService } from './../../service/srch.sub.service';
import { ComService } from './../../service/communication.service';

@Component({
  selector: 'my-chinese',
  template: `
  <my-prod></my-prod>
    <h2>Chinese</h2>
   <div class="search">
      <input type="text" class="searchTerm" (keyup)="srchSend($event.target.value)" placeholder="search the item you want">
</div>


<table class="table">
  <tr *ngFor="let chunk of CE| searchFilter: search |chunkpipe : 4 "  >
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
export class ChineseComponent  {

  search:string = '';

     constructor( 
     public com : ComService
      ){
       this.chk();
   }


   chk()
   {
     if(this.com.data.length > 0){

      for(let i=0;i<this.com.data.length;i++){
        for(let j=0;j<this.CE.length;j++){
         // console.log(this.com.data[i].enable + this.com.data[i].food_name)
         if(this.com.data[i].food_name == this.CE[j].food_name){
         // console.log("true");
         this.CE[j].enable = this.com.data[i].enable;
         this.CE[j].flag = this.com.data[i].flag;
         this.CE[j].quantity = this.com.data[i].quantity;
         }
        }
        // console.log(this.com.data[i]);
      }
     }
   }

    CE:any = [
    {
      food_image : "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/13/40/53/OdK1PcmnRty3BpIy3qb9_egg-rolls-5361.jpg",
      food_name : "Chinese egg roll",
      food_price : 60,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.rachaelraymag.com/.image/t_share/MTUxMzc3MDkzNTQ3NDY4NjIy/tandoori-spiced-turkey-with-cracked-pepper-gravy-101990628.jpg",
      food_name : "Whole Roast Duck",
      food_price : 340,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/recipes/coconut_fried_rice_recipe/650x350_coconut_fried_rice_recipe.jpg",
      food_name : "Shrimp Fried recipe",
      food_price : 240,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.mastercook.com/app/Image/19679777/6324675.jpg",
      food_name : "Sweet and Sour pork",
      food_price : 110,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://rasamalaysia.com/wp-content/uploads/2007/11/kung-pao-chicken-thumb.jpg",
      food_name : "Kung Pao Chicken",
      food_price : 245,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://as2.ftcdn.net/jpg/02/42/45/01/500_F_242450110_8OUKXqzxlnvuHgOUd4GPzQQIchxBegSc.jpg",
      food_name : "Veg Panner Chowmin",
      food_price : 140,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://prods3.imgix.net/images/articles/2017_03/Facebook-Classic-Mohinga-Breakfast-Stew-Recipe1.jpg",
      food_name : "Mohingya",
      food_price : 120,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.thespruceeats.com/thmb/uof94YPDmDqP0kAlbi_t04VR47E=/4000x3000/smart/filters:no_upscale()/chinese-pan-fried-dumplings-694499_hero-01-f8489a47cef14c06909edff8c6fa3fa9.jpg",
      food_name : "Dumpling",
      food_price : 80,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://i.pinimg.com/originals/5c/61/49/5c6149a95cc841a5503f83b42b1e537a.jpg",
      food_name : "Jiangsu Cuisine",
      food_price : 350,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://restaurants.mu/blog-admin/wp-content/uploads/2018/12/Bol-Renverse.jpg",
      food_name : "Rice Wine Chopsue",
      food_price : 210,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://www.hairybikers.com/uploads/images/_recipeImage/Pork-chow-mein.jpg",
      food_name : "Roast Pork LoMein",
      food_price : 180,
      enable : true,
      quantity : 1,
      flag : false
    },
    {
      food_image : "https://thewoksoflife.com/wp-content/uploads/2018/04/braised-tofu-8.jpg",
      food_name : "Braised Tofu",
      food_price : 195,
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