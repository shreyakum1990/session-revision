import { Component, OnInit } from '@angular/core';
import { visitRootRenderNodes } from '@angular/core/src/view/util';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {
  private a : string;
  private b : string;
  // private a : number = 10;
  // private b : number = 20;
  constructor() { }

  ngOnInit() {
  }

  multiply(){
    // alert('The value of a * b is ' + (this.a * this.b))
    var t1 = parseInt(this.a);
    var t2 = parseInt(this.b);
    // document.write('The value of a * b is ' + (t1*t2));
    console.log('the value of a * b is '+ t1*t2);
  }

}
