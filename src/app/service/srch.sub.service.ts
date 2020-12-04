import { Injectable } from '@angular/core';
import  { Subject } from 'rxjs';

@Injectable()

export class SubService{
  public srch = new Subject();
 
}