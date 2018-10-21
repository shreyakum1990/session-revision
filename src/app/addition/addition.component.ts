import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  // private a : number = 2;
  // private b : number = 2;
  private c : number;
  private a : string;
  private b : string;
  constructor() { }

  ngOnInit() {
  }

  // addition(){
   
  //   alert ('The sum of a + b is ' + (this.a + this.b));
  // }

  addition(){
    var t1 = parseInt(this.a);
    var t2 = parseInt(this.b);
    this.c = t1 + t2;
    // console.log('the sum of a+b is' + (t1+t2));
    // alert('the sum of a + b is '+ (t1+t2));
    // document.write('The sum of a+b is '+ (t1+t2))
  }
}
