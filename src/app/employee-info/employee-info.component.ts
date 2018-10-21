import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { rendererTypeName } from '@angular/compiler';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
private emp : any = {};
private emps : any[] = [];
private btn_strt : boolean = true;
private edit_id : string;
  constructor(private http : Http) { }

  ngOnInit() {
    this.getemp()
  }

  addemp(){
    this.http.post('https://employee-cloud-25a77.firebaseio.com/employee.json',this.emp).subscribe(
      (res)=>{
        console.log('The request is ', res.json())
      },
      (err)=>{
        console.log('The error is', err)
      },
      ()=>{
        console.log('The request is accept')
      }
    )
    this.clearform();
  }

  clearform(){
    this.emp.name="";
    this.emp.dept="";
    this.emp.sal="";
  }

  getemp(){
    this.http.get('https://employee-cloud-25a77.firebaseio.com/employee.json').subscribe(
      (res)=>{
        console.log('the response is',res.json())
        var jj = res.json()
        console.log(JSON.stringify(jj))
        var keys = Object.keys(jj);
        this.emps = keys.map(
          (key)=>{
              return { data : jj[key], id:[key]};
          }
        )
      },
      (err)=>{
        console.log('the error is',err)
      },

      ()=>{
        console.log('the request is complete')
      }
    )
  }

  empdelete(key){
    console.log('The delete key is',key)
    this.http.delete('https://employee-cloud-25a77.firebaseio.com/employee/'+key+'.json').subscribe(
      (res)=>{
        console.log('The response is delete')
      },
      (err)=>{
        console.log('The error is',err)
      },
      ()=>{
        console.log('the request is complete')
        this.getemp();
      }
    )
  }

  empedit(empsss){
    this.emp = empsss.data;
    this.edit_id = empsss.id;
    this.btn_strt = false;
  }

  updtemp(){
    this.http.put('https://employee-cloud-25a77.firebaseio.com/employee/'+this.edit_id+'.json',this.emp).subscribe(
        (res)=>{
          console.log('updated')
        },
        (err)=>{
          console.log('The error is', err)
        },
        ()=>{
          this.getemp();
          
        }
      )
      this.clearform()
  }

  
}
