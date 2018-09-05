import { AbstractControl,FormControl } from '@angular/forms';


export function validGender(control: AbstractControl){
    /*
     is given gender valid?

    */


    let t=control.value;
    if(t=='M' || t=='F'){
      return null;
    }
   
      return { isInValid: true };

}

export function validDiabeticStatus(control: AbstractControl){
    /*
     the choice is 1 or 0 indeed

    */


    let t=control.value;
    if(t=='No' || t=='Yes' || t=='Unknown'){
      return null;
    }
   
      return { isInValid: true };

}



export const validNumber = (kind:string,option:string='',base_value:any=null,upper_base_value:any=null) => {
  /*
  Validate the given number, assumed. Optionally you can pass on what you want to check:

  kind=>int or dec

  option:
    
    lt=>less than base_value
    lte=>before base_value or base_value
    gt=>after base_value
    gte=>after base_value or base_value
    e=>equal to base_value
    btn=>between base_value (min) and maximum upper_base_value

  base_value =>is a an optional number to check given value against

  */

  return (control:AbstractControl) => {
    let val:string=control.value;

    var regex=  /^[0-9]+$/; //integer
    if(kind=='dec'){
      regex=/^((\.\d+)|(\d+(\.\d+)?))$/;
    }



    //first is it even a number or integer
    
    if(val==null || !val.match(regex)){
      return { isInValid: true };
    }

    let value:number=+val;
    
    //it is a valid integer or decimal. but we donno if we need to check further
    if(base_value!=null){

      base_value=+base_value;

         switch (option) {
           case "lt":
               if(value>=base_value){
                 return { isInValid: true };
               }
             break;
           case "lte":
               if(value>base_value){
                 return { isInValid: true };
               }
             break;
           case "gt":
               if(value<=base_value){
                 return { isInValid: true };
               }
             break;   
           case "gte":
               if(value<base_value){
                 return { isInValid: true };
               }
             break;  
           case "e":
               if(value!=base_value){
                 return { isInValid: true };
               }
             break;

          case "btn":

          if(value<base_value || value>upper_base_value){
            return {isInValid:true}
          }
          break;   

             default:
                return null;
             
         }
    }

    return null;



     

  
  };
};







