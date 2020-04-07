import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  cour:any[];
  constructor() { 
    this.cour=[
      {cname:'math',csub:'332'},
      {cname:'phy',csub:'234'},
      {cname:'math',csub:'332'},
      {cname:'phy',csub:'234'}
    ];}
    getemp():void{
      this.cour=[
        {cname:'math',csub:'332'},
        {cname:'phy',csub:'234'},
        {cname:'math',csub:'332'},
        {cname:'phy',csub:'234'},
        {cname:'math',csub:'332'},
        {cname:'phy',csub:'234'},
        {cname:'math',csub:'332'},
        {cname:'phy',csub:'234'},
      ];
    }  
    trackByCode(index:number,cour:any):string{
      return cour.cname;
    }

  ngOnInit(){
  }


name="ramesh";
rgno="109";
age="20";
course="mca";

width="3";
size="2";
applay="colorclass italicclass";
isactive=true;
isactivebold=true;
isactiveitalic=false;

showdetails=false;

targeted(){

  this.showdetails=!this.showdetails;
}


apply(){
  let classes={
boldclass:this.isactivebold,
italicclass:this.isactiveitalic
  };
  return classes;
}



onClicked():void{
console.log("sd");
}
} 