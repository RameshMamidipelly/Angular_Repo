import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() all:number;
  @Input() mat:number;
  @Input() phy:number;

  selectRadio:string='all';
@Output()
selectChanged:EventEmitter<string> =new EventEmitter<string>();

onbuttonchanged(){
  this.selectChanged.emit(this.selectRadio);
}

}
