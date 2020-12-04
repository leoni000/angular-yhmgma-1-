import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'searchFilter'
})

export class SearchFilter implements PipeTransform{
  
  transform(arry,srchVal){
     
    if( srchVal == '' ){
      return arry;
    }else{
      console.log(arry);
      let result = arry.filter( (obj) => 
      {
          console.log(obj);
         if( obj.food_name.toLowerCase().includes( srchVal.toLowerCase() ) ){
           return obj;
         }
        } );
        return result;

    }
  }
}