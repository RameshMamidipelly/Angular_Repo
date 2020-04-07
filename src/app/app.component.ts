import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'disDAHa';
   color="color:blue";
   image="./assets/ty.JPG";
   cal="3";
   isActive=false;
   isActives=false;  
   num=4;
   onsava(){
    let num=109;
   }

   onsave($event){
    $event.stoppropagation(); 
    console.log("btn clickedddddd",$event)
   }
   ondiv(){     
    console.log("div clickedddddd")
  }
  email="ramesh@mail.com";
    onkeyup(){
    console.log(this.email);

  }
}
