import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
name:'pcname'
})
export class pipClassImp implements PipeTransform{
transform(name:string){
    
       if(name=='ramesh'){
           return 'mr. '+name;
       }
       else{
           return 'miss. '+name;
       }
}

}