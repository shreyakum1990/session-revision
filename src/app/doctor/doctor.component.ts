import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  private btn_strt : boolean = true;
  private doc_name : string;
  private doc_specialize : string;
  private doctor : any [] = [
    { name : 'mohan', dept : 'MBBS'}
  ];
  constructor() { }

  ngOnInit() {
  }

  adddoc(){
    var data={
      name : this.doc_name,
      dept : this.doc_specialize
    }
    this.doctor.push(data);
    console.log(data);
    this.clearform();
  }
  clearform(){
    this.doc_name="";
    this.doc_specialize="";
  }
  docdelete(index){
    this.doctor.splice(index,1)
  }
  updtdoc(){
    for(var i =0; i<this.doctor.length; i++){
      if(this.doc_name == this.doctor[i].name){
        console.log('index is',i)
        this.doctor[i].name=this.doc_name;
        this.doctor[i].dept=this.doc_specialize;
        this.btn_strt = true;
      }
    }
  }
  docedit(docc : any){
    console.log(docc);
    this.btn_strt = false;
    this.doc_name = docc.name;
    this.doc_specialize = docc.dept;

  }
}
