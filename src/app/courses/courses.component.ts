import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

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
  selectRadiochange:string='all';

  showdetails=true;
  cour:any[];
  constructor() { 
    this.cour=[
      {cname:'mat',csub:'332'},
      {cname:'phy',csub:'234'},
      {cname:'mat',csub:'332'},
      {cname:'phy',csub:'234'}
    ];}

    getALLlen():number{
      return this.cour.length;
    }
    getMATlen():number{
       return this.cour.filter(e=>e.cname==='mat'||e.cname==="MATH").length;
    }
    getPHYlen():number{ 
      return this.cour.filter(e=>e.cname==='phy'||e.cname==="PHY").length;
    }
    textContent:number;

    getemp():void{
      this.cour=[
        {cname:'mat',csub:'332'},
        {cname:'phy',csub:'234'},
        {cname:'mat',csub:'332'},
        {cname:'phy',csub:'234'},
        {cname:'mat',csub:'332'},
        {cname:'phy',csub:'234'},
        {cname:'mat',csub:'332'},
        {cname:'phy',csub:'234'},
      ];
    }  
    trackByCode(index:number,cour:any):string{
      return cour.cname;
    }

  ngOnInit(){
  }
onchangebutonchange(selectRadio:string):void{
this.selectRadiochange=selectRadio;
}


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