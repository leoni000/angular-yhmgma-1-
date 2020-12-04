import { ComService } from './../service/communication.service';
import { Component } from '@angular/core';



@Component({
  selector: 'my-billchkout',
  template: `
  <title-head></title-head>
 
      
<div class="row">    
    <div class="col-40">
    <div class="conter">
      <p class="tot"><b>Total </b> <span class="price" style="color:black"><b>{{tot_amt}}</b></span></p>
      <p class="tot"><b>CGST : 2.5% </b> <span class="price" style="color:black"><b>{{gst}}</b></span></p>
      <p class="tot"><b>SGST : 2.5% </b> <span class="price" style="color:black"><b>{{gst}}</b></span></p>
      <p class="tot"><b>Total Tax : 5% </b> <span class="price" style="color:black"><b>{{2*gst}}</b></span></p>
      <p class="tot"><b>Coupon Code</b><span class="coup"> <input placeholder="enter coupon code" (keyup.enter)="coupon($event.target.value)" /></span></p>
      <p class="tot">{{msg}}</p>
      <br>
      <p class="tot"><b>Total Amount :  </b> <span class="price" style="color:black"><b>{{tot_amt + (2*gst) }}</b></span></p>
    </div> 
    </div>
    <div class="col-60">
    <div class="conter">
      <h3>Payment</h3>
      <div class="con">
      <input type = "radio" name="payment" value="card" (click)="check($event.target.value)">Card
      <input type = "radio" name="payment" value="netbank" (click)="check($event.target.value)">NetBanking
      <input type = "radio" name="payment" value="cash" (click)="check($event.target.value)">Cash On Delivery
      <div *ngIf="card">
        <label for="cname">Name on Card</label>
        <input type="text" name="cardname" placeholder="">
        <label for="ccnum">Card Number</label>
        <input type="text" name="cardnumber" placeholder="">
     
        <div class="row">
            <div class="col-30">
              <label for="expmonth">Exp Month</label>
              <input type="text" name="expmonth" placeholder="">
            </div>
            <div class="col-30">
              <label for="expyear">Exp Year</label>
              <input type="text" name="expyear" placeholder="">
            </div>
            <div class="col-30">
              <label for="cvv">CVV</label>
              <input type="text" name="cvv" placeholder="">
            </div>
          </div>
        </div>
      <div class="flexy" *ngIf="net">
        <p class="cho">Choose a Bank</p>
        <select class="slct" >
          <option value="">Bank List</option>
          <option>ICICI</option>
          <option>SBI</option>
          <option>HDFC</option>
          <option>Axis</option>
          <option>IOB</option>
          <option>IDFC First bank</option>
          <option>Federal</option>
        </select>
      </div>
      <div *ngIf="cash">
        <p class="csh"> Pay the amount at time of Delivery </p>
        <h4>Note : <span class="txt">Please do tender the exact change</span></h4>
      </div>
      </div>
 
 
</div>
  </div>
     </div>
     <div *ngIf = "pmyt">
      <p class="btn" routerLink="/order">Procced with Payment</p>
    </div>
  `,
  styles:[`
  * {
  box-sizing: border-box;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 1em;
}
h3
{
  text-align:center;
  font-family:sans-serif;
  font-size:140%;
}


.col-15 {
  -ms-flex: 15%;
  margin-top:0em;
  padding:0.3em;
  flex: 15%;
}
.col-60 {
  -ms-flex: 15%;
  margin-left:0.5em;
  padding:0.3em;
  flex: 15%;
}

.col-30,
.col-50,
.col-40
.col-70 {
  padding: 0 16px;
}

.conter {
  background-color: #C8E9F1;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  
  border-radius: 3px;
}
.con {
  font-size:70%;
  text-align:center;
}
input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  font-size:120%;
  font-family:sans-serif;
  display: block;
}
.tot {
  font-family:sans-serif;
  text-align:left;
  font-size:15px;
}

.icon-conter {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #4CAF50;
  color: white;
  font-family:sans-serif;
  cursor: pointer;
  border-radius:10px;
  margin-left:26em;
  text-align:center;
  width:25%;
  margin-top:0em;
  padding:0.5em;
  font-size: 25px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196F3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}
.cho
{
  font-size:22px;
  margin-left:10em;
  font-family:sans-serif;
  margin-top:2em;
}
.flexy
{
  display:flex;
  padding:0.5em;
}
.slct
{
  font-size:20px;
  margin:2.1em;
}
.csh
{
  font-size:22px;
  font-family:sans-serif;
  margin-top:2em;
  font-weight:bold;
}
span.txt
{
  font-size:14px;
}
h4
{
  font-size:18px;
}
span.coup
{
  margin-left:5em;
}
  `]
})
export class BillChkoutComponent  {

  card:boolean = false;
  net:boolean = false;
  cash:boolean = false;
  tot_amt:number = 0;
  gst:number = 0;
  msg:string = "";
  coup:boolean;
  lat:any;
  lng:any;
  pmyt:string = "";

  constructor( 
    public com : ComService
   ){
      this.tot();
      
    }

  tot(){
    this.tot_amt = this.com.total_amount;
    console.log("total = "+this.tot_amt);
    this.gst = this.tot_amt*0.025;
    this.gst.toPrecision(2);
    this.coup = false;
    // console.log(1000 - (1000 * 0.09));
  }

  check(val){
   // console.log(val);
   if(this.tot_amt!=0)
   this.pmyt = val;
    if(val == "card"){
    this.card = true;
    this.net = false;
    this.cash = false;
    }
    if(val == "netbank"){
    this.net = true;
    this.card = false;
    this.cash = false;
    }
    if(val == "cash"){
    this.cash = true;
    this.card = false;
    this.net = false;
    }
  }

  coupon(val){
    console.log(this.coup);

    if(this.coup == false && val == "Credoz" && this.tot_amt !=0){
      this.tot_amt -= (this.tot_amt*0.2);
      this.msg = "Coupon value 20% discount successfully applied";
      this.coup = true;
    }
    else{
      if(val == "Credoz" && this.tot_amt !=0)
      this.msg = "Coupon already applied";
      else if(this.tot_amt == 0)
      this.msg = "Please do add some item in cart";
      else
      this.msg = "Coupon does not exist";
    }

  }


}
  

