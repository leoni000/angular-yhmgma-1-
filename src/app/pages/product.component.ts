import { Component } from '@angular/core';

@Component({
  selector: 'my-prod',
  template: `
  <title-head></title-head><br>

<table>
  <tr>
    <td>
      <div class="card">
        <img src="{{menus[0].menu_img}}" routerLink="/south-indian" class="figure-img img-fluid rounded" height="150" width="150">
        <h1 routerLink="/south-indian">{{menus[0].menu_name}}</h1>
        </div>
     </td>
     <td>
      <div class="card">
        <img src="{{menus[1].menu_img}}" routerLink="/north-indian" class="figure-img img-fluid rounded" height="150" width="150">
        <h1 routerLink="/north-indian">{{menus[1].menu_name}}</h1>
        </div>
     </td>
     <td>
      <div class="card">
        <img src="{{menus[2].menu_img}}" routerLink="/chinese" class="figure-img img-fluid rounded" height="150" width="150">
        <h1 routerLink="/chinese">{{menus[2].menu_name}}</h1>
        </div>
     </td>
     <td>
      <div class="card">
        <img src="{{menus[3].menu_img}}" routerLink="/beverages" class="figure-img img-fluid rounded" height="150" width="150">
        <h1 routerLink="/beverages">{{menus[3].menu_name}}</h1>
        </div>
     </td>
  </tr>
</table>

  `,
  styles:[`
    .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 80px;
  cursor: pointer;
  padding:0.5px;
  text-align: center;
}`]
})
export class ProductComponent  {

  menus: any = [{
    menu_img : 'https://www.hlimg.com/images/stories/738X538/cover-pic_1527239659m.jpg',
    menu_name : 'South Indian'
  },
  {
    menu_img : 'https://i.pinimg.com/originals/22/0e/2c/220e2cb270e24151c2b3e2f55d999d5b.jpg',
    menu_name : 'North Indian'
  },
  {
    menu_img : 'https://www.fodors.com/wp-content/uploads/2019/10/ChineseFoodYunnan__HERO_shutterstock_1248477442.jpg',
    menu_name : 'Chinese'
  },
  {
    menu_img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wNi3eNohlSzsppSYOhNmzYoKEJAog3lzNiU4MUqu5VYb2894&s',
    menu_name : 'Beverages'
  }] 



}