import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
  // private a : number = 10;
  // private b : number = 20;
  private a : string;
  private b : string;
  constructor() { }

  ngOnInit() {
  }
  subtract(){
    //alert('The difference of a - b is '+ (this.a - this.b));
     var t1 = parseInt(this.a);
     var t2 = parseInt(this.b);

     //document.write('The difference of a - b is '+ (t1-t2));
     console.log('The difference of a - b is' + (t1 - t2));
  }
}
