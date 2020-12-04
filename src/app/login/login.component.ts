import { Component } from '@angular/core';

@Component({
  selector: 'login-register',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {

  lginflag = true;
  regflag = false; 

login(){
 this.regflag = false;
 this.lginflag = true;
}

register(){
 this.regflag =true ;
 this.lginflag =false ;
}

}