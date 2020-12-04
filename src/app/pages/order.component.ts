import { Component } from '@angular/core';

@Component({
  selector: 'my-order',
  template: `
  <title-head></title-head>
  <h2> You have successfully placed the order</h2>
  `,
  styles:[`
  h2
  {
    text-align : center;
    margin-top : 150px;
  }
  `]
})
export class OrderComponent  {

}