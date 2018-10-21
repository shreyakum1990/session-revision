import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }  from '@angular/forms';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { DirectiveFormComponent } from './directive-form/directive-form.component';
import { MyHideDiretcive } from './directives/my1.directive';
import { MydirectiveDirective } from './mydirective.directive';
import { MyIfDirective } from './directives/m2.directive';
import { MyLoop } from './directives/my3.directive';
import { RedblackDirective } from './redblack.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplyComponent,
    DoctorComponent,
    EmployeeInfoComponent,
    DirectiveFormComponent,
    // MyHideDiretcive,
    // MydirectiveDirective,
    // MyIfDirective,
    // MyLoop,
    RedblackDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
