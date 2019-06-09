import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpComponent } from './emp.component';

@NgModule({
  declarations: [EmpComponent],
  exports: [EmpComponent],
  imports: [
    CommonModule
  ]
})
export class EmpModule { }
